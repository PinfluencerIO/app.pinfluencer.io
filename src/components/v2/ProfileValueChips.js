import { Box } from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";
import { BaseComponent } from "../../pages/BaseComponent";
import { ChipSelectInput } from "../ChipSelectInput";
import { ChipDisplay } from "./ChipDisplay";

export const ProfileValueChips = ({ isEdit, brand, handleChange }) => {
  return isEdit ? (
    <ChipSelectInput
      data={brand}
      id="values"
      label="Values"
      values={VALUES}
      handleChange={handleChange}
    />
  ) : (
    <BaseComponent heading="Values" disableBorder disableGutter>
      <Box pt={1}>
        <ChipDisplay items={brand.values} />
      </Box>
    </BaseComponent>
  );
};
