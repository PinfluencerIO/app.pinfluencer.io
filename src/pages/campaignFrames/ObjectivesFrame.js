import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { Fragment } from "react";
import { OBJECTIVES } from "../../api/data";

export const ObjectivesFrame = ({ data, handleChange }) => {
  return (
    <Fragment>
      <Box sx={{ py: 2 }}>
        <h3>Objectives</h3>
        <p>To get you started, please complete this quick onboarding process</p>
      </Box>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Select Objective</InputLabel>
          <Select
            labelId="select-label"
            id="objective-select"
            value={data.objective}
            label="Select Objective"
            onChange={handleChange}
          >
            {OBJECTIVES.map((objective) => (
              <MenuItem value={objective.key} key={objective.key}>
                {objective.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Fragment>
  );
};
