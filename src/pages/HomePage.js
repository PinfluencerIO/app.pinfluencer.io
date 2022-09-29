import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export const HomePage = ({ isOnboarded }) => {
  const nav = useNavigate();
  return (
    <Stack rowGap={2}>
      <Typography variant="body1">
        This will be the home page with details about what&apos;s going on with
        Pinfluencer App.
      </Typography>
      {!isOnboarded && (
        <Typography>
          To get the best out of Pinfluencer, please complete{" "}
          <Link
            underline="hover"
            color="blue"
            onClick={() => nav("onboarding")}
          >
            Onboarding
          </Link>
        </Typography>
      )}
    </Stack>
  );
};
