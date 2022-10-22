import { Box, FormControl, TextField } from "@mui/material";
import React from "react";
import { ImageUpload } from "../image/ImageUpload";

export const ProposalStep2 = ({
  data,
  handleChange,
  view,
  id = "image",
  width = 200,
  height = 200,
  margin = "0 auto",
}) => {
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
                border: "1px solid",
                borderRadius: "5px",
                background: "url(" + data[id] + ") center center no-repeat",
                backgroundSize: "cover",
                width: { width },
                height: { height },
                margin: { margin },
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
