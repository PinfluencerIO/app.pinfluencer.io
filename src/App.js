import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import "./aws/aws";
import UserContext from "./context/UserContext";
import { Layout } from "./Layout";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/HomePage";
import { Collaborations } from "./pages/collaborations/Collaborations";
import { Profile } from "./pages/Profile";
import { OnboardingSteps } from "./pages/onboarding/OnboardingSteps";
import { CampaignSteps } from "./pages/campaigns/stepper/CampaignSteps";
import { BadUrl } from "./pages/BadUrl";
import { CampaignsTable } from "./pages/campaigns/CampaignsTable";
import { ViewCampaign } from "./pages/campaigns/ViewCampaign";
import { Campaigns } from "./pages/campaigns/Campaigns";

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
      console.log(user);
      nav("Onboarding");
    } else if (user && redirect) {
      // if a user arrived pre authenticated to an authenticated route, redirect after authentication
      setRedirect();
      nav(redirect);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, nav, redirect]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="onboarding" element={<OnboardingSteps />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="campaigns" element={<Campaigns />}>
          <Route index element={<CampaignsTable />} />
          <Route path="new" element={<CampaignSteps />} />
          <Route path=":id" element={<ViewCampaign />} />
          <Route path=":id/edit" element={<CampaignSteps />} />
        </Route>
        <Route path="collaborations" element={<Collaborations />}>
          <Route index element={"<CollaborationsTable />"} />
          <Route path="new" element={"New Collaboration"} />
          <Route path=":id" element={"View Collaboration"} />
        </Route>
        <Route path="*" element={<BadUrl />} />
      </Route>
    </Routes>
  );
}

export default App;
