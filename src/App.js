import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/layout/Layout";
import "./aws/aws";
import MainRootPanel from "./pages/MainRootPanel";
import RequireAuth from "./components/RequiredAuth";
import Campaigns from "./pages/Campaigns";
import CampaignsTable from "./components/CampaignsTable";
import CampaignFlow from "./pages/CampaignFlow";
import CampaignView from "./pages/CampaignView";
import CampaignEdit from "./pages/CampaignEdit";
import Dashboard from "./pages/Dashboard";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Pinfuencer - Home";
    } else {
      document.title = "Pinfluencer - " + location.pathname.substring(1);
    }
  }, [location]);

  return (
    <div className="page-wrap">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainRootPanel />} />
          <Route
            path="campaigns"
            element={
              <RequireAuth>
                <Campaigns />
              </RequireAuth>
            }
          >
            <Route index element={<CampaignsTable />} />
            <Route path="new" element={<CampaignFlow />} />
            <Route path=":id" element={<CampaignView />} />
            <Route path=":id/edit" element={<CampaignEdit />} />
          </Route>
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There&apos;s nothing here! </p>
                <p>The feature you wanted might not be ready yet </p>
                <p>
                  Not to worry, click the Pinfluencer logo to go to the home
                  page 😉
                </p>
              </main>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
