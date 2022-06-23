import { Avatar, useTheme } from "@mui/material";
import React from "react";

export const InitialsAvatar = ({ user }) => {
  const theme = useTheme();
  if (user)
    return (
      <Avatar
        {...stringAvatar(user.given_name + " " + user.family_name, theme)}
        src={user.picture}
        sx={{
          width: 48,
          height: 48,
          bgcolor: theme.palette.pinfluencerGreen.main,
        }}
      />
    );

  return <Avatar sx={{ width: 48, height: 48 }} />;
};

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
