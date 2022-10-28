import React from "react";

import { Outlet } from "react-router";

import { Box } from "@mui/material";
import Footer from "./Footer";
import Header from "./header/Header";

export default function Layout({
  isAuthenticated,
  isOnboarded,
  userType,
  user,
  signin,
  signout,
}) {
  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        isOnboarded={isOnboarded}
        userType={userType}
        user={user}
        signin={signin}
        signout={signout}
      />
      <Box component="main" p={2}>
        <Box
          sx={{
            border: "0px solid pink",
            maxWidth: (theme) => theme.maxWidth,
            margin: "0 auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer flexShrink={0} p={2} />
    </>
  );
}
