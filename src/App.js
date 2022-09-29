import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./aws/aws";
import UserContext from "./context/UserContext";
import { Layout } from "./Layout";
import { BadUrl } from "./pages/BadUrl";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/HomePage";
import { OnboardingSteps } from "./pages/onboading/OnboardingSteps";

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

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="onboarding" element={<OnboardingSteps />} />
        {/* <Route path="profile" element={<Profile />} /> */}
        {/* <Route path="profile/edit" element={<Profile />} /> */}

        {/* <Route
          path="dev"
          element={
            <BaseComponent>
              <Box display="flex" flexDirection="column">
                <Box sx={{ border: "1px solid" }}>
                  <TextField sx={{ width: "100%" }} />
                </Box>
              </Box>
            </BaseComponent>
          }
        /> */}

        <Route path="*" element={<BadUrl />} />
      </Route>
    </Routes>
  );
}

export default App;
