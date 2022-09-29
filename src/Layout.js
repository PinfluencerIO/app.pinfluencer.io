import React from "react";

import { Box } from "@mui/material";

import { Outlet } from "react-router";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/header/Header";
import { MainSection } from "./components/layout/MainSection";

export const Layout = ({ isAuthenticated, isOnboarded, userType }) => {
  return (
    <>
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
    </>
  );
};

{
  false && (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        height: "calc(100% - 50px)",
        border: "4px solid green",
      }}
    >
      Second box green
      <Box sx={{ border: "3px solid blue" }}>3rd box blue</Box>
      <Box
        sx={{
          flex: "1 1 auto",
          display: "flex",
        }}
      >
        <Box
          sx={{
            flex: (theme) => "0 0 " + theme.drawerWidth,
            display: { xs: "none", md: "flex" },
            border: "3px solid pink",
          }}
        >
          4th box pink
          <Box
            sx={{
              border: "2px solid yellow",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            5th box yellow
            <Box sx={{ flexBasis: "100%", border: "2px solid cyan" }}>
              6th box cyan
            </Box>
            <Box sx={{ border: "2px solid brown" }}>7th box brown</Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1 1 auto",
            border: "2px solid orange",
          }}
        >
          7th box orange
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              mt: { xs: "50px", sm: "20px" },
              maxWidth: "1200px",
              border: "2px solid silver",
            }}
          >
            8th box brown
            <Box
              sx={{
                border: "2px solid purple",
                flexBasis: "100%",
                px: { xs: 2, sm: 2.5, md: 4, lg: 4 },
              }}
            >
              9th box brown
              <Outlet />
            </Box>
            <Box
              sx={{
                display: {
                  border: "2px solid lightgreen",
                  xs: "flex",
                  sm: "none",
                },
              }}
            >
              10th box brown{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
