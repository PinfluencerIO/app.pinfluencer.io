import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";

export default function Campaigns() {
  const { user } = useContext(UserContext);
  return (
    <div className="page-main">
      <h2>Campaigns</h2>
      {user ? <Outlet /> : ""}
    </div>
  );
}
