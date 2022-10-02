import { Box } from "@mui/material";
import React from "react";
import { ImageUpload } from "../../components/ImageUpload";

export const BrandHeader = ({
  data,
  handleChange,
  id = "brandHeader",
  view,
}) => {
  return view ? (
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
    <Box component="form" noValidate autoComplete="off">
      <ImageUpload
        data={data}
        elementId={id}
        label={"Brand header image"}
        sizeLabel={"1100 (w) x 200 (h) pixels"}
        handleChange={handleChange}
      />
    </Box>
  );
};
