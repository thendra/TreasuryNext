import fetch from "isomorphic-unfetch";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

let accessToken = null;
let userId = null;
const requestAccessToken = async () => {
  if (accessToken) return;
  const res = await fetch(`${process.env.APP_HOST}/api/session`);
  const profile = await fetch(`${process.env.APP_HOST}/api/me`);
  if (res.ok) {
    const json = await res.json();
    accessToken = json.accessToken;
    userId = profile ? await profile.json() : "";
  } else {
    accessToken = "public";
  }
};
// remove cached token on 401 from the server
const resetTokenLink = onError(({ networkError }) => {
  if (networkError && networkError.name === "ServerError") {
    accessToken = null;
  }
});

const createHttpLink = (headers) => {
  const httpLink = new HttpLink({
    uri: "https://cheerful-possum-15.hasura.app/v1/graphql",
    credentials: "include",
    headers, // auth token is fetched on the server side
    fetch,
  });
  return httpLink;
};
const createWSLink = () => {
  return new WebSocketLink(
    new SubscriptionClient("wss://cheerful-possum-15.hasura.app/v1/graphql", {
      lazy: true,
      reconnect: true,
      connectionParams: async () => {
        await requestAccessToken(); // happens on the client
        return {
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : "",
            "x-hasura-user-id": `${userId ? userId?.sub : ""}`,
          },
        };
      },
    })
  );
};
export default function createApolloClient(initialState, headers) {
  const ssrMode = typeof window === "undefined";
  let link;
  if (ssrMode) {
    link = createHttpLink(headers); // executed on server
  } else {
    link = createWSLink(); // executed on client
  }
  return new ApolloClient({
    ssrMode,
    link,
    cache: new InMemoryCache().restore(initialState),
  });
}
