import "./App.css";

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import "./aws/aws";
import Layout from "./components/layout/Layout";
import MainRootPanel from "./pages/MainRootPanel";
import RequireAuth from "./components/RequiredAuth";
import Campaigns from "./pages/Campaigns";
import CampaignsTable from "./components/CampaignsTable";
import CampaignFlow from "./pages/CampaignFlow";
import CampaignView from "./pages/CampaignView";
import CampaignEdit from "./pages/CampaignEdit";
import Dashboard from "./pages/Dashboard";
import UserContext from "./context/UserContext";
import { Onboarding } from "./pages/Onboarding";
import { Auth } from "./pages/Auth";
import { BrandProfile } from "./pages/BrandProfile";
import { InfluencerProfile } from "./pages/InfluencerProfile";

function App() {
  const { user, redirect, setRedirect } = useContext(UserContext);
  const nav = useNavigate();

  // TODO: create custom hook for page title side effect
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Pinfuencer - Home";
    } else {
      document.title = "Pinfluencer - " + location.pathname.substring(1);
    }
  }, [location]);

  useEffect(() => {
    //  redirect if user is available and that user has not completed onboarding
    if (user && !("custom:usertype" in user)) {
      nav("onboarding");
    } else if (user && redirect) {
      // if a user arrived pre authenticated to an authenticated route, redirect after authentication
      setRedirect();
      nav(redirect);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, nav, redirect]);

  return (
    <div className="page-wrap">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="auth" element={<Auth />} />
          <Route path="onboarding" element={<Onboarding />} />
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
            path="profile"
            element={
              <RequireAuth>
                {user && user["custom:usertype"] === "brand" ? (
                  <BrandProfile />
                ) : (
                  <InfluencerProfile />
                )}
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
