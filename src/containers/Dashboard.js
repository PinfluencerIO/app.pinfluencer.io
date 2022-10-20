import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = ({ user }) => {
  return (
    <Stack rowGap={2}>
      <Typography variant="body1">
        Hi {user.given_name} - This is where details of what is going on with
        your Pinfluencer account. Widgets with metrics and all that good stuff.
      </Typography>
      <Typography>
        Why not create a{" "}
        <Link to="/proposal/new">New Collaboration Proposal</Link>
      </Typography>
    </Stack>
  );
};
