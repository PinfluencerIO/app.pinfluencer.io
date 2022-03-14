import "./onboardingCategories.css";
import { OnboardingFrame } from "../OnboardingFrame/OnboardingFrame";
import React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const Categories = ({
  data,
  onChangeCategory,
  onNextClick,
  onPreviousClick,
}) => {
  const onDelete = (itemToBeDeleted) => () => {
    const updated = data.categories.filter((item) => item !== itemToBeDeleted);
    onChangeCategory(updated);
  };
  const allCategories = [
    "Category 1",
    "Second Category",
    "3rd Category",
    "Nothing Category",
    "Sutainable",
    "Ethical",
    "Fashion",
    "Food",
    "Pet",
    "Fitness",
  ];

  return (
    <OnboardingFrame
      title="Categories"
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
              options={allCategories}
              getOptionLabel={(option) => option}
              value={data.categories}
              onChange={(e, newValue) => {
                console.log(newValue);
                onChangeCategory(newValue);
              }}
              renderTags={() => null}
              renderInput={(params) => (
                <TextField
                  autoFocus
                  {...params}
                  variant="outlined"
                  placeholder="Select up to 5 Categories"
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
              {data.categories.map((v) => (
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
      disabledNext={data.categories.length < 1}
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
