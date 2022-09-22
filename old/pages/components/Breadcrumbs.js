import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router";
import { Typography } from "@mui/material";
import isValidUUID from "./uuidUtils";
import { useTheme } from "@emotion/react";

// TODO How to directly use routes in App?? Breaks DRY
const breadcrumbNameMap = {
  "/dashboard": "Dashboard",
  "/onboarding": "Onboarding",
  "/profile": "Profile",
  "/profile/edit": "Edit",
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
        display: pathnames.length == 0 ? "none" : "block",
        "& a": {
          textDecoration: "none",
          color: theme.palette.primary.main,
        },
        "& a:hover": {
          textDecoration: "underline",
        },
        "& p": {
          color: theme.palette.active.main,
        },
        lineHeight: 1.75,
      }}
      aria-label="breadcrumb"
    >
      <Link to="/">
        <HomeIcon sx={{ marginTop: 0.6 }}></HomeIcon>
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
          <Typography key={to}>
            {breadcrumbNameMap[to.toLowerCase()]}
          </Typography>
        ) : (
          // only include configured routes.
          // page will display BadUrl component
          breadcrumbNameMap[to.toLowerCase()] && (
            <Link to={"/" + slice.join("/")} key={to}>
              {breadcrumbNameMap[to.toLowerCase()]}
            </Link>
          )
        );
      })}
    </Breadcrumbs>
  );
};
