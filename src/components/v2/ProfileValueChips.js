import React from "react";
import { VALUES } from "../../api/data";
import { BaseComponent } from "../../pages/BaseComponent";
import { ChipSelectInput } from "../ChipSelectInput";
import { ChipDisplay } from "./ChipDisplay";

export const ProfileValueChips = ({ isEdit, brand }) => {
  return isEdit ? (
    <ChipSelectInput data={brand} id="values" label="Values" values={VALUES} />
  ) : (
    <BaseComponent heading="Values" disableBorder disableGutter>
      <ChipDisplay items={brand.values} />
    </BaseComponent>
  );
};
