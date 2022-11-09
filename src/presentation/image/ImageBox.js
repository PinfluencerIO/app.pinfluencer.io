import { Box } from "@mui/material";
import React from "react";

export const ImageBox = ({
  imageSrc,
  width = { xs: 200 - 100, sm: 200 - 55, md: 200 },
  height = { xs: 200 - 100, sm: 200 - 55, md: 200 },
  margin = "0 auto",
  children,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderRadius: "5px",
        background: "url(" + imageSrc + ") center center no-repeat",
        backgroundSize: "cover",
        width: width,
        height: height,
        margin: margin,
      }}
    >
      {children}
    </Box>
  );
};
