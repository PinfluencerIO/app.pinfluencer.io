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
  const { user } = useContext(UserContext);
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
    if (!isAuthenticated(user) && location.pathname !== "/") {
      nav("/");
    } else if (isAuthenticated(user) && !isOnboarded(user)) {
      // allow home page
      if (location.pathname === "/") return;
      // all other pages redirect to onboarding
      if (location.pathname !== "/onboarding") {
        nav("onboarding");
      }
    }
  }, [user, nav, location]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            isAuthenticated={isAuthenticated(user)}
            isOnboarded={isOnboarded(user)}
            userType={userType(user)}
          />
        }
      >
        <Route index element={<HomePage isOnboarded={isOnboarded(user)} />} />

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

const isAuthenticated = (user) => {
  return user;
};

const isOnboarded = (user) => {
  return false && isAuthenticated(user) && "custom:usertype" in user;
};

const userType = (user) => {
  return isAuthenticated(user) && user["custom:usertype"];
};
