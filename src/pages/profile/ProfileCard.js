import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const ProfileCard = ({ title, children }) => {
  const nav = useNavigate();
  return (
    <Paper sx={{ padding: 2 }} variant="outlined">
      <Stack
        direction="row"
        justifyContent="space-between"
        onClick={() => nav("edit/" + title.replace(/\s/g, "").toLowerCase())}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2 }} fontWeight="900">
          {">"}
        </Typography>
      </Stack>
      <Box>{children}</Box>
    </Paper>
  );
};
