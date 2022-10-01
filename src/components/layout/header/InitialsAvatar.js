import { Avatar, Typography } from "@mui/material";
import React from "react";
import { getBrand } from "../../../api/api";

export const InitialsAvatar = ({ user }) => {
  const widthAndHeight = { width: 30, height: 30 };

  const [avatar, setAvatar] = React.useState();

  React.useEffect(() => {
    if (user && user.picture) {
      setAvatar(user.picture);
    } else {
      getBrand().then((brand) => {
        console.log("brand", brand);
        if (brand.logo) {
          setAvatar(brand.logo);
        }
      });
    }
  }, [user]);

  if (!user) return <Avatar sx={widthAndHeight} />;

  if (avatar) {
    return <Avatar src={avatar} sx={widthAndHeight} />;
  } else
    return (
      <Avatar
        {...stringAvatar(user.given_name + " " + user.family_name)}
        sx={widthAndHeight}
      />
    );
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
