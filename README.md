A rebuild of a React client SPA in Next.js with Hasura, Apollo, Material UI and authentication with 0Auth to demonstrate the differences between client and server side applications with these key technologies. 

Important take aways:
- To use material-ui we must wrap the context of the application with the 'ServerStyleSheets' from the library, passing the styles the the children along with initial props. Easy to implement following docs https://material-ui.com/guides/server-rendering/
- Apollo should be used on a per page basis to avoid interfering with static site generation; in this example a withApollo HOC was used to wrap the Pages using graphQl queries, allowing the Home page to be statically pre rendered independantly

A large amount of the authentication, Hasura set up and Apollo integration was achieved by referencing this tutorial: https://hasura.io/learn/graphql/nextjs-fullstack-serverless/apollo-client/
