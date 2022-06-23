import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import "./aws/aws";
import UserContext from "./context/UserContext";
import { Layout } from "./Layout";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/HomePage";
import { Campaigns } from "./pages/Campaigns";
import { Collaborations } from "./pages/Collaborations";
import { Onboarding } from "./pages/Onboarding";
import { Profile } from "./pages/Profile";

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
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There&apos;s nothing here! </p>
              <p>The feature you wanted might not be ready yet </p>
              <p>
                Not to worry, click the Pinfluencer logo to go to the home page
                😉
              </p>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
