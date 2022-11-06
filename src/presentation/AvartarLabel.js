import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export const AvartarLabel = ({ src, label }) => {
  return (
    <Box display="flex" alignItems="center" gap={1} border={0} flex={1}>
      <Box>
        <Avatar src={src} />
      </Box>
      <Box>
        <Typography>{label}</Typography>
      </Box>
    </Box>
  );
};
