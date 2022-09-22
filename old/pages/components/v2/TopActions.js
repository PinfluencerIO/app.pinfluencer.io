import { Box, Stack } from "@mui/material";
import React from "react";
import { BreadcrumbComponent } from "../Breadcrumbs";

export const TopActions = ({ children }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      sx={{ border: "0px solid green", width: "100%" }}
    >
      <Box>
        <BreadcrumbComponent />
      </Box>
      <Box>{children}</Box>
    </Stack>
  );
};
