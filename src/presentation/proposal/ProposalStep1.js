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
    handleChange({ target: { name: "proposalMonth", value: "" } });
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
          sx={{ mb: 3 }}
          multiline
          rows={5}
        />
        {view ? (
          <Stack direction="row" gap={2}>
            <Box>Proposal Date:</Box> <Box>{data.proposalMonth}</Box>
            <Box>{data.proposalYear}</Box>
          </Stack>
        ) : (
          <Stack direction="row" gap={2}>
            <FormControl fullWidth>
              <InputLabel id="proposal-year-select-label">
                Proposal Year
              </InputLabel>
              <Select
                labelId="proposal-year-select-label"
                id="proposal-year-select"
                name={"proposalYear"}
                value={data.proposalYear}
                label="Proposal Year"
                onChange={updateYear}
              >
                {getYears()}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="proposal-month-select-label">
                Proposal Month
              </InputLabel>
              <Select
                labelId="proposal-month-select-label"
                id="proposal-month-select"
                name={"proposalMonth"}
                value={data.proposalMonth}
                label="Proposal Month"
                onChange={handleChange}
              >
                {getMonth(data.proposalYear)}
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
