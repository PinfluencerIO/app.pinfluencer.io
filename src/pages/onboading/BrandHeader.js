import { Box } from "@mui/material";
import React from "react";
import { ImageUpload } from "../../components/ImageUpload";

export const BrandHeader = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <ImageUpload
        data={data}
        elementId={"brandHeader"}
        label={"Upload Header Image"}
        sizeLabel={"1128 (w) x 191 (h) pixels"}
        handleChange={handleChange}
      />
    </Box>
  );
};
