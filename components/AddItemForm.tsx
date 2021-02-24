import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Dialog,
  CircularProgress,
  Checkbox,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "@apollo/client";
import { useFetchUser } from "../lib/user";
import { gql } from "@apollo/react-hooks";
import ImageUpload from "./ImageUpload";

interface IAddItemForm {
  open: boolean;
  onClose: () => void;
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
        description: $description
        image_url: $image_url
        created_by: $user_id
        is_public: $is_public
      }
    ) {
      returning {
        id
        title
        description
        image_url
        created_by
        is_public
      }
    }
  }
`;

const AddItemForm = ({ open, onClose }: IAddItemForm) => {
  const { user } = useFetchUser();
  const [addItem] = useMutation(ADD_ITEM);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleDescChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(event.target.checked);
  };

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    addItem({
      variables: {
        id: uuidv4(),
        title: title,
        description: description,
        image_url: imageUrl,
        user_id: user?.sub,
        is_public: isPublic,
      },
      refetchQueries: [{ query: GET_ITEMS }],
    });
    setTitle("");
    setDescription("");
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
          </Box>
          <Box display="flex" justifyContent="center" pb={2}>
            <ImageUpload
              label="Main image"
              setImageLoading={setImageLoading}
              onUpload={setImageUrl}
            />
          </Box>
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
          </Box>
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
