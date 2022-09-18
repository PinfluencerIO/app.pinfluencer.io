import React from "react";
import { CATEGORIES } from "../../api/data";
import { BaseComponent } from "../../pages/BaseComponent";
import { ChipSelectInput } from "../ChipSelectInput";
import { ChipDisplay } from "./ChipDisplay";

export const ProfileCategoryChips = ({ isEdit, brand }) => {
  return isEdit ? (
    <ChipSelectInput
      data={brand}
      id="categories"
      label="Categories"
      values={CATEGORIES}
    />
  ) : (
    <BaseComponent heading="Categories" disableBorder disableGutter>
      <ChipDisplay items={brand.categories} />
    </BaseComponent>
  );
};
