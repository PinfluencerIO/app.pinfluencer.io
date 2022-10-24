import React from "react";

import { Outlet } from "react-router";

import Header from "../header/Header";
import Footer from "./Footer";
import MainSection from "./MainSection";

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
      {/* Large top margin on MainSection to compensate for Nav menu */}
      <MainSection
        flex="1"
        p={2}
        margin={`${isAuthenticated ? 12 : 8}px auto 8px`}
        mt={isAuthenticated ? 12 : 8}
      >
        <Outlet />
      </MainSection>
      <Footer flexShrink={0} p={2} />
    </>
  );
}
