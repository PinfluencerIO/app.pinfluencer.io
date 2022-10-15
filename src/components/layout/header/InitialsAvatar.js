import { Avatar, Typography } from "@mui/material";
import React from "react";
import { getBrand } from "../../../api/brandApi";

export const InitialsAvatar = ({ user }) => {
  const widthAndHeight = { width: 30, height: 30 };

  const [avatar, setAvatar] = React.useState();

  React.useEffect(() => {
    if (user && user.picture) {
      setAvatar(user.picture);
    } else {
      "custom:usertype" in user &&
        getBrand()
          .then((brand) => {
            if (brand.logo) {
              setAvatar(brand.logo);
            }
          })
          .catch((err) => {
            console.log(err);
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
  if ("".includes("")) {
    return;
  }
  return {
    children: (
      <Typography>
        {`${name.split(" ")[0][0]}${name.split(" ")[1][0]}`}
      </Typography>
    ),
  };
}
