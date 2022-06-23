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
          width: 40,
          height: 40,
          bgcolor: theme.palette.pinfluencerGreen.main,
        }}
      />
    );

  return <Avatar sx={{ width: 40, height: 40 }} />;
};

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
