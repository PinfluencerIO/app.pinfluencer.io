import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { SmallScreenMenu } from "./SmallScreenMenu";
import { LargerScreenMenu } from "./LargerScreenMenu";
import { AvatarMenu } from "./AvatarMenu";

export const FullMenuBar = ({ navItems }) => {
  const isXs = useMediaQuery("(max-width:600px)");
  return (
    <React.Fragment>
      {isXs ? <SmallScreenMenu /> : <LargerScreenMenu navItems={navItems} />}
      {/*Avatar/menu */}
      <Box sx={{ flexGrow: 0 }}>
        <AvatarMenu />
      </Box>
    </React.Fragment>
  );
};
