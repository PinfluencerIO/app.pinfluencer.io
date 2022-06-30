import { Stack } from "@mui/material";
import React from "react";
import { CATEGORIES } from "../../api/data";
import { ChipSelectInput } from "../../components/ChipSelectInput";

export const Categories = ({ data, handleChange }) => {
  return (
    <React.Fragment>
      <Stack spacing={1} display={{ md: "column" }}>
        <h3>Categories *</h3>
        <p>
          Exercitation ex est proident est laborum eiusmod nisi excepteur minim
          cillum velit officia. Qui et ut id minim veniam qui culpa excepteur.
          Id id amet amet Lorem dolore ullamco labore.
        </p>
      </Stack>
      <ChipSelectInput
        data={data}
        handleChange={handleChange}
        values={CATEGORIES}
        id="categories"
        label="Categories *"
      />
    </React.Fragment>
  );
};
