import { Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

export const CategoriesAndValues = ({ categories, values }) => {
  if (!categories) categories = [];
  if (!values) values = [];
  return (
    <Paper elevation={3}>
      <Typography variant="h4" color={"gray"}>
        Match details
      </Typography>
      <Stack spacing={3}>
        <ChipDisplay heading="Categories" items={categories} />
        <ChipDisplay heading="Values" items={values} />
      </Stack>
    </Paper>
  );
};

export const ChipDisplay = ({ heading, items }) => {
  return (
    <Box>
      <Typography variant="h6">{heading}</Typography>
      <Grid container spacing={1}>
        {items.map((item) => {
          return (
            <Grid item key={item}>
              <Chip
                label={item}
                sx={{
                  border: "1px solid",
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
