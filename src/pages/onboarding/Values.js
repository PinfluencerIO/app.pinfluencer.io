import { Stack } from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";
import { ChipSelectInput } from "../../components/ChipSelectInput";

export const Values = ({ data, handleChange }) => {
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
      <ChipSelectInput
        data={data}
        handleChange={handleChange}
        values={VALUES}
        id="values"
        label="Values"
      />
    </React.Fragment>
  );
};
