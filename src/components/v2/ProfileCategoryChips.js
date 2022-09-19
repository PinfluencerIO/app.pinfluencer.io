import { Box } from "@mui/material";
import React from "react";
import { CATEGORIES } from "../../api/data";
import { BaseComponent } from "../../pages/BaseComponent";
import { ChipSelectInput } from "../ChipSelectInput";
import { ChipDisplay } from "./ChipDisplay";

export const ProfileCategoryChips = ({ isEdit, brand, handleChange }) => {
  return isEdit ? (
    <ChipSelectInput
      data={brand}
      id="categories"
      label="Categories"
      values={CATEGORIES}
      handleChange={handleChange}
    />
  ) : (
    <BaseComponent heading="Categories" disableBorder disableGutter>
      <Box pt={1}>
        <ChipDisplay items={brand.categories} />
      </Box>
    </BaseComponent>
  );
};
