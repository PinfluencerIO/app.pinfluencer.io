import React from "react";
import { Box, Grid, InputAdornment, OutlinedInput } from "@mui/material";
const numbersBetween0and100 = new RegExp("^\\b([0-9]|[1-9][0-9]|100)\\b$");

export function AudienceGenderPercentages({ data, handleChange }) {
  const audiences = [
    {
      id: "audienceFemaleSplit",
      label: "Female",
    },

    {
      id: "audienceMaleSplit",
      label: "Male",
    },
  ];

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
        dataset: {},
      });
  };

  return (
    <Grid container>
      {audiences.map((audience) => (
        <Box
          key={audience.id}
          sx={{ alignItems: "center", display: "flex", mb: 2 }}
        >
          <OutlinedInput
            id={`influencer.${audience.id}`}
            name={`influencer.${audience.id}`}
            variant="outlined"
            autoComplete="false"
            value={data.influencer[audience.id]}
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
            {audience.label}
          </div>
        </Box>
      ))}
    </Grid>
  );
}
