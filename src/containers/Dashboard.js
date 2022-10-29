import { Stack, Typography } from "@mui/material";

import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { ProposalList } from "./proposals/ProposalList";

export const Dashboard = ({ userType }) => {
  const { user } = useContext(UserContext);

  return (
    <Stack rowGap={2}>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Hi {user.given_name} - This is where details of what is going on with
        your Pinfluencer account. Widgets with metrics and all that good stuff.
      </Typography>
      {userType === "brand" && <ProposalList />}
    </Stack>
  );
};
