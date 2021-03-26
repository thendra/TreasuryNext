import { useQuery } from "@apollo/react-hooks";
import { Box, Fab, Typography } from "@material-ui/core";
import gql from "graphql-tag";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import AddItemForm from "../components/AddItemForm";
import ItemSummary from "../components/ItemSummary";
import Layout from "../components/layout";
import { withApollo } from "../lib/withApollo";
import { GetItemsQuery, Items } from "../src/generated/graphql";

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

/**
 * Items page statically rendered at /items with client side data fetching and graphql query caching via withApollo HOC
 *
 * TODO: Add funcionality for viewing all 'public' items as well as 'private' items created by the current user
 **/
const ItemsPage = () => {
  const { loading, data } = useQuery<GetItemsQuery>(GET_ITEMS);
  const [addItemFormOpen, setAddItemFormOpen] = useState(false);

  return (
    <Layout>
      <Typography variant="h1">Your Items</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {loading ? (
          <Typography variant="h2">Loading...</Typography>
        ) : (
          data?.Items.map(({ title, image_url }: Items) => (
            <ItemSummary title={title} image_url={image_url} />
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

export default withApollo()(ItemsPage);
