import {
  Autocomplete,
  Box,
  Chip,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";

export const Values = ({ data, handleChange }) => {
  const onDelete = (itemToBeDeleted) => () => {
    const updated = data.values.filter((item) => item !== itemToBeDeleted);
    handleChange({
      target: {
        name: "values",
        value: updated,
      },
    });
  };
  return (
    <React.Fragment>
      <Stack spacing={1} display={{ md: "column" }}>
        <h3>Values *</h3>
        <p>
          Aliqua aliqua veniam consectetur anim magna cupidatat cillum eiusmod
          ea tempor nisi. Reprehenderit ex occaecat sint ex. Tempor duis nulla
          et eiusmod id. Ipsum cupidatat voluptate culpa cupidatat cillum qui
          fugiat ipsum nostrud velit.
        </p>
      </Stack>
      <Box sx={{ minWidth: 100 }}>
        <FormControl>
          <Autocomplete
            disabled={data.values.length >= 5} //limit of 5
            multiple
            id="values"
            name="values"
            options={VALUES}
            value={data.values}
            sx={{ width: "255px" }}
            renderTags={() => null} // stop chip inside of dropdown
            onChange={(e, newValue) => {
              console.log("onchange", { e, newValue });
              handleChange({
                target: { name: "values", value: newValue },
              });
            }}
            renderInput={(params) => <TextField {...params} label="Values" />}
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
        {data.values.map((v) => (
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
