import React, { useCallback } from "react";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Dropzone from "react-dropzone";
import request from "superagent";

interface IImageUpload {
  label: string;
  onUpload: (uploadUrl: string) => void;
  setImageLoading: (imgLoading: boolean) => void;
}

const ImageUpload = ({ label, onUpload, setImageLoading }: IImageUpload) => {
  const CLOUDINARY_UPLOAD_PRESET = "imdbo67t";
  const CLOUDINARY_UPLOAD_URL =
    "https://api.cloudinary.com/v1_1/dqtlei5j1/upload";

  const handleImageUpload = (file: any) => {
    setImageLoading(true);
    let upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      setImageLoading(false);
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        console.log(response);
        onUpload(response.body.secure_url);
      }
    });
  };
  const handleDrop = useCallback((acceptedFiles: any) => {
    handleImageUpload(acceptedFiles[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Button
            variant="contained"
            color="default"
            startIcon={<CloudUploadIcon />}
          >
            {label}
          </Button>
        </div>
      )}
    </Dropzone>
  );
};

export default ImageUpload;
