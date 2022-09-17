import { Avatar } from "@mui/material";
import React from "react";

export const InitialsAvatar = ({ user }) => {
  if (user)
    return user.picture ? (
      <Avatar
        src={user.picture}
        sx={{
          width: 40,
          height: 40,
        }}
      />
    ) : (
      <Avatar
        {...stringAvatar(user.given_name + " " + user.family_name)}
        sx={{
          width: 40,
          height: 40,
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
