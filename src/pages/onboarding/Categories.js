import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { CATEGORIES } from "../../api/data";

export const Categories = ({ data, handleChange }) => {
  const onDelete = (itemToBeDeleted) => () => {
    const updated = data.categories.filter((item) => item !== itemToBeDeleted);
    handleChange({
      target: {
        name: "categories",
        value: updated,
      },
    });
  };
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
      <Box sx={{ minWidth: 100 }}>
        <FormControl>
          <Autocomplete
            disabled={data.categories.length >= 5} //limit of 5
            multiple
            id="categories"
            name="categories"
            options={CATEGORIES}
            value={data.categories}
            sx={{ width: "255px" }}
            renderTags={() => null} // stop chip inside of dropdown
            onChange={(e, newValue) => {
              console.log("onchange", { e, newValue });
              handleChange({
                target: { name: "categories", value: newValue },
              });
            }}
            renderInput={(params) => (
              <TextField {...params} label="Categories" />
            )}
          />
        </FormControl>
      </Box>
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
              border: "1px solid ",
            }}
          />
        ))}
      </Box>
    </React.Fragment>
  );
};
