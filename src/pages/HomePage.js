import { Typography } from "@mui/material";
import React from "react";
import { BaseComponent } from "./BaseComponent";

export const HomePage = () => {
  return (
    <BaseComponent heading="Welcome to Pinfluencer" disableBorder>
      <Typography variant="body1">
        This will be the home page with details about what&apos;s going on with
        Pinfluencer App
      </Typography>
    </BaseComponent>
  );
};
