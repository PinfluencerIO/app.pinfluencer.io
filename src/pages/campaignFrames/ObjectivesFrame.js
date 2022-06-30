import { Box, MenuItem, TextField, useMediaQuery } from "@mui/material";
import React, { Fragment } from "react";
import { OBJECTIVES } from "../../api/data";

export const ObjectivesFrame = ({ data, handleChange }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Fragment>
      <Box sx={{ py: 2, marginBottom: "-30px" }}>
        <h3>Objectives</h3>
        <p>Set your objectives and success criteria</p>
      </Box>
      <TextField
        required
        sx={{}}
        select
        id="objective"
        name="objective"
        value={data.objective}
        label="Select Objective"
        onChange={handleChange}
      >
        {OBJECTIVES.map((objective) => (
          <MenuItem value={objective.key} key={objective.key}>
            {matches ? objective.label : objective.shortLabel}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        id="successDescription"
        label={
          matches ? "What does success look like?" : "Describe your success"
        }
        name="successDescription"
        variant="outlined"
        autoComplete="false"
        value={data.successDescription}
        onChange={(event) => handleChange(event)}
        multiline
        rows={8}
      />
    </Fragment>
  );
};
