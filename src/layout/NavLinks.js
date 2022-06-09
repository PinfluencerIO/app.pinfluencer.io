import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <nav className="page-nav">
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
      |{" "}
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
  );
}
