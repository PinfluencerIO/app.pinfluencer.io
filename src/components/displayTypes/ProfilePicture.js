import { Box } from "@mui/material";
import React from "react";
import { ImageBox } from "../../presentation/image/ImageBox";
import { ImageUpload } from "../../presentation/image/ImageUpload";

export const ProfilePicture = ({ data, handleChange, id = "image", view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      {view ? (
        <ImageBox imageSrc={data[id]} />
      ) : (
        <ImageUpload
          data={data}
          elementId={id}
          label={"Profile Picture"}
          sizeLabel={"Best 300 (w) x 300 (h) pixels"}
          handleChange={handleChange}
        />
      )}
    </Box>
  );
};
