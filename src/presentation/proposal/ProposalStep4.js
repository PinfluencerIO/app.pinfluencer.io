import { Box, FormControl } from "@mui/material";
import React from "react";
import { Values } from "../values/Values";

export const ProposalStep4 = ({ data, handleChange }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <Values data={data} handleChange={handleChange} />
      </FormControl>
    </Box>
  );
};
