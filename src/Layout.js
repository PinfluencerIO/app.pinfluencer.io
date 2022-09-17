import React from "react";

import { Box, Toolbar } from "@mui/material";

import { Outlet } from "react-router";

import UserContext from "./context/UserContext";
import { Footer } from "./components/v2/Footer";
import { ElevatedAppBar } from "./components/v2/ElevatedAppBar";
import { SmallScreenFooter } from "./components/v2/SmallScreenFooter";
import { LeftDrawNavLinks } from "./components/v2/LeftDrawNavLinks";
import { pagesForUserType } from "./pages/pagesForUserType";

export const Layout = () => {
  const { user } = React.useContext(UserContext);

  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          height: "calc(100% - 50px)",
        }}
      >
        <Box>
          <ElevatedAppBar navItems={pagesForUserType(user)} />
          <Toolbar />
        </Box>
        <Box
          sx={{
            flex: "1 1 auto",
            display: "flex",
          }}
        >
          <Box
            sx={{
              flex: (theme) => "0 0 " + theme.drawerWidth,
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Box sx={{ flexBasis: "100%" }}>
                <LeftDrawNavLinks pages={pagesForUserType(user)} />
              </Box>
              <Box>
                <Footer />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flex: "1 1 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                mt: { xs: "50px", sm: "20px" },
                maxWidth: "900px",
              }}
            >
              <Box
                sx={{ flexBasis: "100%", px: { xs: 2, sm: 2.5, md: 3, lg: 4 } }}
              >
                <Outlet />
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                }}
              >
                <SmallScreenFooter />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
