import { Box, FormControl, TextField } from "@mui/material";
import React from "react";

export const ProposalStep1 = ({ data, handleChange, view }) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="title"
          name={"title"}
          value={data.title}
          label="Title"
          variant="standard"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 2 }}
        />

        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="creativeGuidance"
          name="creativeGuidance"
          value={data.creativeGuidance}
          label="Creative Guidance"
          variant="standard"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 1 }}
          multiline
          rows={5}
        />
      </FormControl>
    </Box>
  );
};
