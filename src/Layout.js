import { Container } from "@mui/material";
import React from "react";

import { Outlet } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/header/Header";
import { MainSection } from "./components/layout/MainSection";

export const Layout = ({ isAuthenticated, isOnboarded, userType }) => {
  return (
    <Container>
      <Header
        isAuthenticated={isAuthenticated}
        isOnboarded={isOnboarded}
        userType={userType}
      />
      {/* Large top margin on MainSection to compensate for Nav menu */}
      <MainSection flex="1" p={2} mt={isAuthenticated ? 12 : 8}>
        <Outlet />
      </MainSection>
      <Footer flexShrink={0} p={2} />
    </Container>
  );
};
