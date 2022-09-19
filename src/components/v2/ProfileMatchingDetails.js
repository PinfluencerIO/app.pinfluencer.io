import { Box, Stack } from "@mui/material";
import React from "react";
import { ProfileCategoryChips } from "./ProfileCategoryChips";
import { ProfileValueChips } from "./ProfileValueChips";

export const ProfileMatchingDetails = ({ isEdit, brand, handleChange }) => {
  return (
    <Stack direction="column">
      <Box>
        <ProfileCategoryChips
          isEdit={isEdit}
          brand={brand}
          handleChange={handleChange}
        />
      </Box>

      <Box mt={isEdit ? 2 : 0}>
        <ProfileValueChips
          isEdit={isEdit}
          brand={brand}
          handleChange={handleChange}
        />
      </Box>
    </Stack>
  );
};
