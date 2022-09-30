import { Box } from "@mui/material";
import React from "react";
import { ImageUpload } from "../../components/ImageUpload";

export const BrandHeader = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <ImageUpload
        data={data}
        elementId={"brandHeader"}
        label={"Brand header image"}
        sizeLabel={"1100 (w) x 200 (h) pixels"}
        handleChange={handleChange}
      />
    </Box>
  );
};
