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
      <Box component="main" border={0} borderColor="blue" my={1}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
