import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { updateBrand } from "../../api/api";
import { TopActions } from "./TopActions";

export const ProfileActions = ({ isEdit, brand }) => {
  const nav = useNavigate();
  const save = (event) => {
    console.log(event, brand);
    updateBrand(brand)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((json) => {
        console.log(json);
        nav("..");
      })
      .catch((err) => {
        console.error("An error happened calling api", err);
      });
  };
  return (
    <TopActions>
      {isEdit ? (
        <Box>
          <Button
            variant="contained"
            sx={{ mr: 1 }}
            onClick={(event) => save(event)}
          >
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
