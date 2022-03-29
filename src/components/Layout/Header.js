import React from "react";
import { Avatar, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export const Header = ({ signOut, user }) => {
  return (
    <header>
      <div className="HolyGrailHeader" role="banner">
        <div className="HolyGrailHeaderLogo">LOGO</div>
        <div className="HolyGrailHeaderActions">
          <div className="HolyGrailHeaderActionsCenter">Header Actions</div>
          <div className="HolyGrailHeaderActionsRight">
            {
              <Button onClick={signOut} endIcon={<LogoutIcon />}>
                <Avatar
                  alt={
                    user.attributes.given_name +
                    " " +
                    user.attributes.family_name
                  }
                  src={user.attributes.picture}
                  sx={{ marginRight: 1 }}
                />
                Sign out
              </Button>
            }
          </div>
        </div>
      </div>
    </header>
  );
};
