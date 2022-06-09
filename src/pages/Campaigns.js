import { Outlet } from "react-router-dom";

export default function Campaigns() {
  return (
    <div className="page-main">
      <h2>Campaigns</h2>
      <Outlet />
    </div>
  );
}
