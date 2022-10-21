import { Box, FormControl, TextField } from "@mui/material";
import React from "react";
import { ImageUpload } from "../image/ImageUpload";

export const ProposalStep2 = ({ data, handleChange, view, id }) => {
  return (
    <Box noValidate autoComplete="off">
      <FormControl fullWidth margin="none">
        <TextField
          inputProps={{ readOnly: view ? "readonly" : "" }}
          fullWidth
          id="name"
          name={"name"}
          value={data.name}
          label="Name"
          variant="standard"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 3 }}
        />
        <Box noValidate autoComplete="off">
          {view ? (
            <Box
              sx={{
                minHeight: "200px",
                border: "1px solid",
                borderRadius: "5px",
                background: "url(" + data[id] + ") center center no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
          ) : (
            <ImageUpload
              data={data}
              elementId={id}
              label={"Product Picture"}
              sizeLabel={"Best 300 (w) x 300 (h) pixels"}
              handleChange={handleChange}
            />
          )}
        </Box>
      </FormControl>
    </Box>
  );
};
