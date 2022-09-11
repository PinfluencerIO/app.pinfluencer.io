import { Box } from "@mui/system";

import React from "react";
import { Outlet } from "react-router-dom";
import { ElevatedScoll } from "./components/ElevatedScoll";
import { Footer } from "./components/Footer";
import { SideDrawer } from "./components/SideDrawer";
import UserContext from "./context/UserContext";

const pages = {
  authenticated: {
    brand: ["Dashboard", "Campaigns", "Collaborations"],
    influencer: ["Dashboard", "Collaborations"],
  },
};
export const Layout = () => {
  const { user } = React.useContext(UserContext);

  function pagesForUserType() {
    //authented and onboarded
    if (user && "custom:usertype" in user) {
      return pages.authenticated[user["custom:usertype"]];
    }
    //authenticated not onboarded
    if (user) {
      return ["Onboarding"];
    }
    // unauthenticated
    return [];
  }

  // menu drawer - pops out of side via hamburger on small screens
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <React.Fragment>
      <ElevatedScoll
        navItems={pagesForUserType()}
        handleDrawerToggle={handleDrawerToggle}
      />

      <SideDrawer
        navItems={pagesForUserType()}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      {/* Main body section */}
      <Box sx={{ my: 2, mx: { sm: 3, xs: 1.5 } }}>
        <Outlet />
      </Box>

      <Footer />
    </React.Fragment>
  );
};
