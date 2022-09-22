import { Autocomplete, Box, Chip, FormControl, TextField } from "@mui/material";
import React, { Fragment } from "react";

export const ChipSelectInput = ({ data, handleChange, values, id, label }) => {
  if (!data) data = [];
  const onDelete = (itemToBeDeleted) => () => {
    const updated = data[id].filter((item) => item !== itemToBeDeleted);
    handleChange({
      target: {
        name: id,
        value: updated,
      },
    });
  };
  return (
    <Fragment>
      <Box sx={{ minWidth: 100 }}>
        <FormControl>
          <Autocomplete
            disabled={data[id].length >= 5} //limit of 5
            multiple
            id={id}
            name={id}
            options={values}
            value={data[id]}
            sx={{ width: "255px" }}
            renderTags={() => null} // stop chip inside of dropdown
            onChange={(e, newValue) => {
              handleChange({
                target: { name: id, value: newValue },
              });
            }}
            renderInput={(params) => <TextField {...params} label={label} />}
          />
        </FormControl>
      </Box>
      <Box
        mt={2}
        sx={{
          width: "100%",
          height: 100,
          borderRadius: "5px",
          backgroundColor: "white",
          border: "1px gray solid",
        }}
      >
        {data[id].map((v) => (
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
    </Fragment>
  );
};
