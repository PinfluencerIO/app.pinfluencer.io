import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { TopActions } from "./TopActions";

export const ProfileActions = ({ isEdit }) => {
  const nav = useNavigate();
  return (
    <TopActions>
      {isEdit ? (
        <Box>
          <Button variant="contained" sx={{ mr: 1 }}>
            Save
          </Button>
          <Button variant="contained" onClick={() => nav("/profile")}>
            Cancel
          </Button>
        </Box>
      ) : (
        <Button variant="contained" onClick={() => nav("edit")}>
          Edit
        </Button>
      )}
    </TopActions>
  );
};
