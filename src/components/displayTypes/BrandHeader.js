import { Box } from "@mui/material";
import React from "react";
import { ImageBox } from "../../presentation/image/ImageBox";
import { ImageUpload } from "../../presentation/image/ImageUpload";

export const BrandHeader = ({
  data,
  handleChange,
  id = "brandHeader",
  view,
}) => {
  return view ? (
    <ImageBox imageSrc={data[id]} />
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
