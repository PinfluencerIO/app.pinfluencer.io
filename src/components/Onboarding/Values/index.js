import "./onboardingValues.css";
import { OnboardingFrame } from "../OnboardingFrame/OnboardingFrame";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";

export const Values = ({
  data,
  onChangeValues,
  onNextClick,
  onPreviousClick,
}) => {
  const onDelete = (itemToBeDeleted) => () => {
    const updated = data.values.filter((item) => item !== itemToBeDeleted);
    onChangeValues(updated);
  };
  const allValues = [
    "Value 1",
    "Second Value",
    "3rd Value",
    "Nothing Value",
    "Important ",
    "Ethical",
    "Vegan",
    "Integrity",
    "Honesty",
    "Fairness",
  ];

  return (
    <OnboardingFrame
      title="Values"
      description="Form Description goes here. Tell user why we need this information, etc..."
      inputs={
        <form
          name="form"
          id="form"
          noValidate
          autoComplete="off"
          onSubmit={onSubmit()}
        >
          <Box sx={{ width: 500 }}>
            <Autocomplete
              disabled={data.categories.length > 4}
              multiple
              options={allValues}
              getOptionLabel={(option) => option}
              value={data.values}
              onChange={(e, newValue) => {
                console.log(newValue);
                onChangeValues(newValue);
              }}
              renderTags={() => null}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Select up to 5 Values"
                />
              )}
            />
            <Box
              mt={6}
              sx={{
                width: "100%",
                height: 200,
                backgroundColor: "white",
                border: "1px gray solid",
              }}
            >
              {data.values.map((v) => (
                <Chip
                  key={v}
                  label={v}
                  onDelete={onDelete(v)}
                  sx={{
                    m: "10px",
                    border: "1px solid var(--primary-color)",
                    "& .MuiChip-deleteIcon": {
                      color: "#B22222",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </form>
      }
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      disabledNext={data.values.length < 1}
    />
  );
  function onSubmit() {
    return (e) => {
      console.log("submit");
      e.preventDefault();
      onNextClick();
    };
  }
};
