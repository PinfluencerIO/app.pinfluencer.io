import React from "react";
import { Box, Grid, InputAdornment, OutlinedInput } from "@mui/material";
const numbersBetween0and100 = new RegExp("^\\b([0-9]|[1-9][0-9]|100)\\b$");

export function AudienceAgePercentages({ data, handleChange }) {
  const audiences = [
    {
      id: "audienceA13To17Split",
      label: "13 to 17",
    },
    {
      id: "audienceA18To24Split",
      label: "18 to 24",
    },
    {
      id: "audienceA25To34Split",
      label: "25 to 34",
    },
    {
      id: "audienceA35To44Split",
      label: "35 to 44",
    },
    {
      id: "audienceA45To54Split",
      label: "45 to 55",
    },
    {
      id: "audienceA55To64Split",
      label: "55 to 64",
    },
    {
      id: "audienceA65PlusSplit",
      label: "64+",
    },
  ];

  const numberCheck = (event) => {
    console.log("% value :", event.target.value);
    if (
      numbersBetween0and100.test(event.target.value) ||
      event.target.value === ""
    ) {
      console.log("acceptable value, pass on t change handler");
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
