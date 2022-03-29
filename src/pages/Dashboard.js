import React from "react";

export default function Dashboard({ userType }) {
  return userType === "brand" ? (
    <div>Dashboard</div>
  ) : (
    <div>Influener Feed</div>
  );
}
