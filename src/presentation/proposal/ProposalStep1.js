import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

export const ProposalStep1 = ({ data, handleChange, view }) => {
  const updateYear = (event) => {
    handleChange({ target: { name: "listingMonth", value: "" } });
    handleChange(event);
  };

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
          variant="outlined"
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
          variant="outlined"
          onChange={(event) => handleChange(event)}
          sx={{ mb: 3 }}
          multiline
          rows={5}
        />
        {view ? (
          <Stack direction="row" gap={2}>
            <Box>Listing Date:</Box> <Box>{data.listingMonth}</Box>
            <Box>{data.listingYear}</Box>
          </Stack>
        ) : (
          <Stack direction="row" gap={2}>
            <FormControl fullWidth>
              <InputLabel id="listing-year-select-label">
                Listing Year
              </InputLabel>
              <Select
                labelId="listing-year-select-label"
                id="listing-year-select"
                name={"listingYear"}
                value={data.listingYear}
                label="Listing Year"
                onChange={updateYear}
              >
                {getYears()}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="listing-month-select-label">
                Listing Month
              </InputLabel>
              <Select
                labelId="listing-month-select-label"
                id="listing-month-select"
                name={"listingMonth"}
                value={data.listingMonth}
                label="Listing Month"
                onChange={handleChange}
              >
                {getMonth(data.listingYear)}
              </Select>
            </FormControl>
          </Stack>
        )}
      </FormControl>
    </Box>
  );
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getYears() {
  const d = new Date();
  const years = [];
  const current = d.getFullYear();
  years.push(
    <MenuItem key={current} value={current}>
      {current}
    </MenuItem>
  );
  years.push(
    <MenuItem key={current + 1} value={current + 1}>
      {current + 1}
    </MenuItem>
  );

  return years;
}

function getMonth(year) {
  const d = new Date();
  if (year === d.getFullYear()) {
    const rest = months.slice(d.getMonth());
    const result = rest.map((m) => (
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    ));
    return result;
  } else if (year === 2023) {
    return months.map((m) => (
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    ));
  } else {
    return [];
  }
}
