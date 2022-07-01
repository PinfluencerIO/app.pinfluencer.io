import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import isValidUUID from "./uuidUtils";

// TODO How to directly use routes in App?? Breaks DRY
const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/onboarding": "Onboarding",
  "/profile": "Profile",
  "/campaigns": "Campaigns",
  "/campaigns/new": "New",
  "/campaigns/:id": "View",
  "/campaigns/:id/edit": "Edit",
  "/collaborations": "Collaborations",
};
export const BreadcrumbComponent = () => {
  const theme = useTheme();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
    <Breadcrumbs
      sx={{
        marginTop: "20px",
        marginBottom: "5px",
        marginLeft: "20px",
        minHeight: "45px",
      }}
      aria-label="breadcrumb"
    >
      <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
        to="/"
      >
        <HomeIcon
          sx={{
            color: theme.palette.pinfluencerGreen.main,
          }}
        />
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const slice = pathnames.slice(0, index + 1);
        const updated = slice.map((i) => {
          if (isValidUUID(i, false)) {
            return ":id";
          }
          return i;
        });
        const join = updated.join("/");
        const to = "/" + join;
        return last ? (
          <Typography color="black" key={to}>
            {breadcrumbNameMap[to.toLowerCase()]}
          </Typography>
        ) : (
          // only include configured routes.
          // page will display BadUrl component
          breadcrumbNameMap[to.toLowerCase()] && (
            <Link
              style={{
                textDecoration: "none",
                color: theme.palette.pinfluencerGreen.main,
              }}
              underline="hover"
              color="inherit"
              to={slice.join("/")}
              key={to}
            >
              {breadcrumbNameMap[to.toLowerCase()]}
            </Link>
          )
        );
      })}
    </Breadcrumbs>
  );
};
