import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./aws/aws";
import { BrandDescription } from "./components/displayTypes/BrandDescription";
import { BrandDetails } from "./components/displayTypes/BrandDetails";
import { BrandHeader } from "./components/displayTypes/BrandHeader";
import { BrandLogo } from "./components/displayTypes/BrandLogo";
import { Categories } from "./components/displayTypes/Categories";
import { Values } from "./components/displayTypes/Values";
import { YourDetails } from "./components/displayTypes/YourDetails";
import UserContext from "./context/UserContext";
import { Layout } from "./Layout";
import { BadUrl } from "./pages/BadUrl";
import { Dashboard } from "./pages/Dashboard";
import { HomePage } from "./pages/HomePage";
import { OnboardingSteps } from "./pages/onboading/OnboardingSteps";
import { Profile } from "./pages/profile/Profile";
import { ProfileEditPanel } from "./pages/profile/ProfileEditPanel";

function App() {
  const { user, onboard } = useContext(UserContext);
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
      if (location.pathname !== "/onboarding") {
        nav("onboarding");
      }
    } else if (
      isAuthenticated(user) &&
      isOnboarded(user) &&
      location.pathname === "/onboarding"
    ) {
      nav("/");
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
        <Route
          index
          element={
            <HomePage
              isAuthenticated={isAuthenticated(user)}
              isOnboarded={isOnboarded(user)}
            />
          }
        />

        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="onboarding"
          element={<OnboardingSteps onboard={onboard} />}
        />
        <Route path="profile" element={<Profile />}></Route>
        <Route
          path="profile/edit/yourdetails"
          element={
            <ProfileEditPanel title="Your Details">
              {(data, handleChange) => (
                <YourDetails
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/branddetails"
          element={
            <ProfileEditPanel title="Brand Details">
              {(data, handleChange) => (
                <BrandDetails
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/branddescription"
          element={
            <ProfileEditPanel title="Brand Description">
              {(data, handleChange) => (
                <BrandDescription
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/brandlogo"
          element={
            <ProfileEditPanel title="Brand Logo">
              {(data, handleChange) => (
                <BrandLogo
                  id="logo"
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/brandheader"
          element={
            <ProfileEditPanel title="Brand Header">
              {(data, handleChange) => (
                <BrandHeader
                  id="headerImage"
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/values"
          element={
            <ProfileEditPanel title="Values">
              {(data, handleChange) => (
                <Values
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/categories"
          element={
            <ProfileEditPanel title="Categories">
              {(data, handleChange) => (
                <Categories
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
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
  return isAuthenticated(user) && "custom:usertype" in user;
};

const userType = (user) => {
  return isAuthenticated(user) && user["custom:usertype"];
};
