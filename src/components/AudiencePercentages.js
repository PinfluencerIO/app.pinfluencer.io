import React from "react";
import {
  Box,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
const numbersBetween0and100 = new RegExp("^\\b([0-9]|[1-9][0-9]|100)\\b$");

export function AudiencePercentages({
  heading,
  collection,
  data,
  handleChange,
}) {
  const numberCheck = (event) => {
    if (
      numbersBetween0and100.test(event.target.value) ||
      event.target.value === ""
    ) {
      handleChange(event);
    }
  };

  const defaultValueCheck = (event) => {
    if (event.target.value === "")
      handleChange({
        target: { name: event.target.name, value: 0 },
        currentTarget: { name: event.target.name, value: 0 },
        dataset: {},
      });
  };

  return (
    <Grid item sm={6}>
      <Box marginBottom={2}>
        <Typography variant="h6">{heading}</Typography>
      </Box>

      <Grid container>
        {collection.map((audience) => (
          <Box
            key={audience.id}
            sx={{ alignItems: "center", display: "flex", mb: 2 }}
          >
            <OutlinedInput
              id={audience.id}
              name={audience.id}
              variant="outlined"
              autoComplete="false"
              value={data[audience.id.split(".")[0]][audience.id.split(".")[1]]}
              onChange={numberCheck}
              onBlur={defaultValueCheck}
              sx={{
                width: 75,
                mr: 1,
                "& input": { textAlign: "right" },
              }}
              endAdornment={<InputAdornment position="end">%</InputAdornment>}
            />
            <div style={{ display: "inline", width: "70px", marginRight: 15 }}>
              <Typography variant="body1">{audience.label}</Typography>
            </div>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
}
