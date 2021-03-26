import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  CircularProgress,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useFetchUser } from "../lib/user";
import { gql } from "@apollo/react-hooks";
import ImageUpload from "./ImageUpload";
import { GetItemsDocument, useAdditemMutation } from "../src/generated/graphql";

interface IAddItemForm {
  open: boolean;
  onClose: () => void;
}

const ADD_ITEM = gql`
  mutation ADDITEM(
    $id: String
    $title: String
    $description: String
    $image_url: String
    $user_id: String
    $is_public: Boolean
  ) {
    insert_Items(
      objects: {
        id: $id
        title: $title
        # description: $description
        image_url: $image_url
        created_by: $user_id
        # is_public: $is_public
      }
    ) {
      returning {
        id
        title
        # description
        image_url
        created_by
        # is_public
      }
    }
  }
`;

/**
 * Form for a user to add a new item to their Items dashboard
 */
const AddItemForm = ({ open, onClose }: IAddItemForm) => {
  const { user } = useFetchUser();
  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [isPublic, setIsPublic] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [additemMutation] = useAdditemMutation({
    variables: {
      id: uuidv4(),
      title,
      // description: description,
      image_url: imageUrl,
      user_id: user?.sub,
      // is_public: isPublic,
    },
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  // NOT REQUIRED: This will be used when ItemDetailed component has been integrated
  // const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   setDescription(event.target.value);
  // };

  // NOT REQUIRED: This will be used when ItemDetailed component has been integrated
  // const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsPublic(event.target.checked);
  // };

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    additemMutation({
      refetchQueries: [{ query: GetItemsDocument }],
    });
    setTitle("");
    // setDescription("");
    setImageUrl("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <Box p={2}>
        <Typography variant="h2">New Item</Typography>
        <form noValidate autoComplete="off" onSubmit={handleAddItem}>
          {(imageUrl || imageLoading) && (
            <Box display="flex" justifyContent="center">
              {imageLoading && <CircularProgress />}
              {imageUrl && (
                <img
                  style={{ width: "200px" }}
                  alt="uploaded_image"
                  src={imageUrl}
                />
              )}
            </Box>
          )}
          <Box display="flex" justifyContent="center" my={2}>
            <TextField
              value={title}
              variant="outlined"
              id="title-input"
              label="Title"
              onChange={handleTitleChange}
              color="primary"
            />
          </Box>
          {/*NOT REQUIRED: This will be used when ItemDetailed component has been integrated
           <Box display="flex" justifyContent="center" my={2}>
            <TextField
              value={description}
              variant="outlined"
              id="title-input"
              label="Description"
              multiline
              onChange={handleDescChange}
              color="primary"
            />
          </Box> */}
          <Box display="flex" justifyContent="center" pb={2}>
            <ImageUpload
              label="Main image"
              setImageLoading={setImageLoading}
              onUpload={setImageUrl}
            />
          </Box>
          {/*NOT REQUIRED: This will be used when ItemDetailed component has been integrated
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pb={2}
          >
            <Checkbox
              checked={isPublic}
              onChange={handleIsPublicChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            <Typography variant="caption">Make Public</Typography>
          </Box> */}
          <Box display="flex" justifyContent="center" pb={2}>
            <Button
              variant="contained"
              type="submit"
              disabled={imageLoading}
              onClick={onClose}
            >
              Add Item
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default AddItemForm;
