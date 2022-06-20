import { useContext } from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import UserContext from "../../context/UserContext";

import Footer from "./Footer";
import Topbar from "./Topbar";

export default function Layout() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Topbar />

      {user && "custom:usertype" in user ? (
        <nav className="page-nav">
          <NavLink
            style={({ isActive }) => {
              return {
                position: "relative",
                top: "5px",
                color: isActive ? "red" : "",
              };
            }}
            to="/"
          >
            {" "}
            <HomeIcon />
          </NavLink>
          {" | "}
          <NavLink
            style={({ isActive }) => {
              return {
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          {" | "}
          {user["custom:usertype"] === "brand" ? (
            <>
              {" "}
              <NavLink
                style={({ isActive }) => {
                  return {
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to="/campaigns"
              >
                Campaigns
              </NavLink>{" "}
              {" | "}
            </>
          ) : (
            ""
          )}
          <NavLink
            style={({ isActive }) => {
              return {
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to="/collaborations"
          >
            Collaborations
          </NavLink>
        </nav>
      ) : (
        <nav className="page-nav"></nav>
      )}
      <Outlet />

      <Footer />
    </>
  );
}
