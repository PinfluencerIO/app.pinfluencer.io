import { Box } from "@mui/material";
import React from "react";
import { ImageBox } from "./ImageBox";
import { ImageUpload } from "./ImageUpload";

export const Image = (props) => {
  const {
    id,
    data,
    handleChange,
    view,
    label = "Not Set",
    sizeLabel = "Not Set",
    width = 200,
    height = 200,
    margin = "0  auto",
  } = props;
  if (!id) return "id is required";

  console.log(props);

  return (
    <Box autoComplete="off">
      {view ? (
        <ImageBox
          imageSrc={data[id]}
          width={width}
          height={height}
          margin={margin}
        />
      ) : (
        <ImageUpload
          data={data}
          elementId={id}
          label={label}
          sizeLabel={sizeLabel}
          handleChange={handleChange}
          width={width}
          height={height}
          margin={margin}
        />
      )}
    </Box>
  );
};
