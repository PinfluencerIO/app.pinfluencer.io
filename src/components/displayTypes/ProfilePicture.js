import { Box } from "@mui/material";
import React from "react";
import { ImageUpload } from "../ImageUpload";

export const ProfilePicture = ({ data, handleChange, id = "image", view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      {view ? (
        <Box
          sx={{
            minHeight: "200px",
            border: "1px solid",
            borderRadius: "5px",
            background: "url(" + data[id] + ") center center no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
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
