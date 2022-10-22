import { Box, FormControl } from "@mui/material";
import React from "react";
import { Categories } from "../categories/Categories";

export const ProposalStep3 = ({ data, handleChange, view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <Categories data={data} handleChange={handleChange} view={view} />
      </FormControl>
    </Box>
  );
};
