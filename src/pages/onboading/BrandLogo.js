import { Box } from "@mui/material";
import React from "react";
import { ImageUpload } from "../../components/ImageUpload";

export const BrandLogo = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <ImageUpload
        data={data}
        elementId={"brandLogo"}
        label={"Logo"}
        sizeLabel={"Best 300 (w) x 300 (h) pixels"}
        handleChange={handleChange}
      />
    </Box>
  );
};
