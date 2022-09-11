import { Stack, Typography } from "@mui/material";
import React from "react";
import { VALUES } from "../../api/data";
import { ChipSelectInput } from "../../components/ChipSelectInput";

export const Values = ({ data, handleChange }) => {
  return (
    <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
      <Typography variant="h4">Values *</Typography>
      <Typography variant="p">
        Aliqua aliqua veniam consectetur anim magna cupidatat cillum eiusmod ea
        tempor nisi.
      </Typography>
      <ChipSelectInput
        data={data}
        handleChange={handleChange}
        values={VALUES}
        id="values"
        label="Values"
      />
    </Stack>
  );
};
