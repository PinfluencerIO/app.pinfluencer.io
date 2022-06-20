import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return <div>Dashboard Type: {user ? user["custom:usertype"] : ""}</div>;
};

export default Dashboard;
