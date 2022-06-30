import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { Fragment } from "react";
import { OBJECTIVES } from "../../api/data";

export const ObjectivesFrame = ({ data, handleChange }) => {
  const matches = useMediaQuery("(min-width:600px)");
  console.log(matches);
  return (
    <Fragment>
      <Box sx={{ py: 2 }}>
        <h3>Objectives</h3>
        <p>To get you started, please complete this quick onboarding process</p>
      </Box>
      <InputLabel id="select-label">Select Objective</InputLabel>
      <TextField
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
      <FormControl>
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
      </FormControl>
    </Fragment>
  );
};
