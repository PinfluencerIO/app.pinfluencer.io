import { Box } from "@mui/material";
import React from "react";
import { Large } from "../dev/Large";
import { Small } from "../dev/Small";

export const MainSection = (props) => {
  const { sm } = props;
  return (
    <Box component="main" {...props}>
      {sm ? <Small /> : <Large />}
    </Box>
  );
};
