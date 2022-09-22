import { Avatar, Typography } from "@mui/material";
import React from "react";

export const InitialsAvatar = ({ user }) => {
  const widthAndHeight = { width: 30, height: 30 };

  if (user)
    return user.picture ? (
      <Avatar src={user.picture} sx={widthAndHeight} />
    ) : (
      <Avatar
        {...stringAvatar(user.given_name + " " + user.family_name)}
        sx={widthAndHeight}
      />
    );

  return <Avatar sx={widthAndHeight} />;
};

function stringAvatar(name) {
  return {
    children: (
      <Typography>
        {`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
      </Typography>
    ),
  };
}
