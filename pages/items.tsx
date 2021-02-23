import { useQuery } from "@apollo/react-hooks";
import { Box, Fab, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import AddItemForm from "../components/AddItemForm";
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
  const { loading, error, data } = useQuery(GET_ITEMS);
  const [addItemFormOpen, setAddItemFormOpen] = useState(false);

  return (
    <Layout>
      <Typography variant="h1">Your Items</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {loading ? (
          <Typography variant="h2">Loading...</Typography>
        ) : (
          data?.Items.map(({ id, title, image_url, created_by }: IItems) => (
            <ItemSummary
              id={id}
              title={title}
              image_url={image_url}
              created_by={created_by}
            />
          ))
        )}
      </Box>
      <Box position="fixed" bottom={50} right={40}>
        <Fab
          onClick={() => setAddItemFormOpen(true)}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>
      <AddItemForm
        open={addItemFormOpen}
        onClose={() => setAddItemFormOpen(false)}
      />
    </Layout>
  );
};

export default withApollo()(Items);
