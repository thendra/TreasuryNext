import { useQuery } from "@apollo/react-hooks";
import { Box, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import React from "react";
import ItemSummary from "../components/ItemSummary";
import Layout from "../components/layout";
import { withApollo } from "../lib/withApollo";

interface IItems {
  created_by?: "String";
  description?: "String";
  id: "String";
  image_url?: "String";
  is_public?: "Boolean";
  title: "String";
}

const GET_MY_TODOS = gql`
  query getMyTodos {
    todos(
      where: { is_public: { _eq: false } }
      order_by: { created_at: desc }
    ) {
      id
      title
      created_at
      is_completed
    }
  }
`;

const GET_ITEMS = gql`
  query GetItems {
    Items {
      id
      title
      description
      image_url
      created_by
      is_public
    }
  }
`;

const Items = () => {
  const { loading, error, data } = useQuery(GET_MY_TODOS);

  console.log(data);
  return (
    <Layout>
      <Typography variant="h1">Your Items</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {/* {data?.Items.map(({ id, title, image_url, created_by }: IItems) => (
          <ItemSummary
            id={id}
            title={title}
            image_url={image_url}
            created_by={created_by}
          />
        ))} */}
      </Box>
    </Layout>
  );
};

export default withApollo()(Items);
