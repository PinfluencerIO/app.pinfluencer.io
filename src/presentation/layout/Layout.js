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
    <Box
      mx={2}
      display="flex"
      flexDirection="column"
      border={0}
      borderColor="red"
      sx={{ minHeight: "100vh" }}
    >
      <Header
        isAuthenticated={isAuthenticated}
        isOnboarded={isOnboarded}
        userType={userType}
        user={user}
        signin={signin}
        signout={signout}
      />
      <Box
        component="main"
        border={0}
        borderColor="blue"
        paddingY={1}
        display="flex"
        flexDirection="column"
      >
        <Outlet />
      </Box>
      <Footer marginTop="auto" py={3} />
    </Box>
  );
}
