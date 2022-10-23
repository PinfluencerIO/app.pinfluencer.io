import { Box } from "@mui/material";
import React from "react";

export const ImageBox = ({
  imageSrc,
  width = 200,
  height = 200,
  margin = "0  auto",
  children,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderRadius: "5px",
        background: "url(" + imageSrc + ") center center no-repeat",
        backgroundSize: "cover",
        width: { width },
        height: { height },
        margin: { margin },
      }}
    >
      {children}
    </Box>
  );
};
