import {
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { OBJECTIVES } from "../../../api/data";

export const ObjectivesFrame = ({ data, handleChange }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
      <Typography variant="h4">Objectives</Typography>
      <Typography variant="body1">
        Set your objectives and success criteria
      </Typography>
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
    </Stack>
  );
};
