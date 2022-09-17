import React from "react";
import { Stack, Typography } from "@mui/material";
import { AvatarMenu } from "./AvatarMenu";
import { LinkedToolTip } from "./LinkedToolTip";
import { NavItems } from "./NavItems";

export const TopMenuBar = ({ navItems }) => {
  return (
    <React.Fragment>
      <Stack width="100%">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LinkedToolTip title="Home" route="/">
            <Typography variant="h6">Pinfluencer</Typography>
          </LinkedToolTip>
          <AvatarMenu />
        </Stack>
        <NavItems navItems={navItems} />
      </Stack>
    </React.Fragment>
  );
};
