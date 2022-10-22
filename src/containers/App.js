import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { audienceAges, audienceGenders } from "../api/data";

import "../aws/aws";
import { AudiencePercentages } from "../components/displayTypes/AudiencePercentages";
import { BrandDescription } from "../components/displayTypes/BrandDescription";
import { BrandDetails } from "../components/displayTypes/BrandDetails";
import { BrandHeader } from "../components/displayTypes/BrandHeader";
import { Image } from "../components/displayTypes/Image";
import { InfluencerDetails } from "../components/displayTypes/InfluencerDetails";
import { YourDetails } from "../components/displayTypes/YourDetails";
import UserContext from "../context/UserContext";
import { BadUrl } from "../pages/BadUrl";
import { HomePage } from "../pages/HomePage";
import { OnboardingSteps } from "../pages/onboading/OnboardingSteps";
import { Profile } from "../pages/profile/Profile";
import { ProfileEditPanel } from "../pages/profile/ProfileEditPanel";
import { PublicView } from "../pages/profile/PublicView";
import { Categories } from "../presentation/categories/Categories";
import Layout from "../presentation/layout/Layout";
import { ProposalEditPanel } from "../presentation/proposal/ProposalEditPanel";
import { ProposalStep1 } from "../presentation/proposal/ProposalStep1";
import { ProposalStep2 } from "../presentation/proposal/ProposalStep2";
import { ProposalStep3 } from "../presentation/proposal/ProposalStep3";
import { ProposalStep4 } from "../presentation/proposal/ProposalStep4";
import { Values } from "../presentation/values/Values";
import { Dev } from "../test/Dev";
import { Dashboard } from "./Dashboard";
import { NewCollaborationProposal } from "./NewCollaborationProposal";
import { ProposalView } from "./ProposalView";

function App() {
  const { user, signin, signout, onboard } = useContext(UserContext);
  const nav = useNavigate();

  // TODO: create custom hook for page title side effect
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Pinfluencer - Home";
    } else {
      document.title = "Pinfluencer - " + location.pathname.substring(1);
    }
  }, [location]);

  useEffect(() => {
    if (!isAuthenticated(user) && location.pathname !== "/") {
      console.log(location);
    } else if (
      isAuthenticated(user) &&
      !isOnboarded(user) &&
      location.pathname !== "/onboarding"
    ) {
      nav("onboarding");
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
      <Route path="dev" element={<Dev />} />
      <Route
        path="/"
        element={
          <Layout
            isAuthenticated={isAuthenticated(user)}
            isOnboarded={isOnboarded(user)}
            userType={userType(user)}
            user={user}
            signin={signin}
            signout={signout}
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

        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="proposal/new" element={<NewCollaborationProposal />} />
        <Route path="proposal/view/:id" element={<ProposalView />} />
        <Route
          path="proposal/edit/:id/details"
          element={
            <ProposalEditPanel title="Details">
              {(data, handleChange) => (
                <ProposalStep1 data={data} handleChange={handleChange} />
              )}
            </ProposalEditPanel>
          }
        />
        <Route
          path="proposal/edit/:id/product"
          element={
            <ProposalEditPanel title="Product">
              {(data, handleChange) => (
                <ProposalStep2 data={data} handleChange={handleChange} />
              )}
            </ProposalEditPanel>
          }
        />
        <Route
          path="proposal/edit/:id/categories"
          element={
            <ProposalEditPanel title="Categories">
              {(data, handleChange) => (
                <ProposalStep3 data={data} handleChange={handleChange} />
              )}
            </ProposalEditPanel>
          }
        />
        <Route
          path="proposal/edit/:id/values"
          element={
            <ProposalEditPanel title="Values">
              {(data, handleChange) => (
                <ProposalStep4 data={data} handleChange={handleChange} />
              )}
            </ProposalEditPanel>
          }
        />
        <Route
          path="onboarding"
          element={<OnboardingSteps onboard={onboard} user={user} />}
        />
        <Route path="profile" element={<Profile type={userType(user)} />} />
        <Route
          path="profile/view"
          element={<PublicView type={userType(user)} />}
        />
        <Route
          path="profile/edit/yourdetails"
          element={
            <ProfileEditPanel title="Your Details" type={userType(user)}>
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
            <ProfileEditPanel title="Brand Details" type={userType(user)}>
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
          path="profile/edit/influencerdetails"
          element={
            <ProfileEditPanel title="Influencer Details" type={userType(user)}>
              {(data, handleChange) => (
                <InfluencerDetails
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/audienceagedetails"
          element={
            <ProfileEditPanel
              title="Audience Age Details"
              type={userType(user)}
            >
              {(data, handleChange) => (
                <AudiencePercentages
                  collection={audienceAges}
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/audiencegenderdetails"
          element={
            <ProfileEditPanel
              title="Audience Gender Details"
              type={userType(user)}
            >
              {(data, handleChange) => (
                <AudiencePercentages
                  collection={audienceGenders}
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
            <ProfileEditPanel title="Brand Description" type={userType(user)}>
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
            <ProfileEditPanel title="Brand Logo" type={userType(user)}>
              {(data, handleChange) => (
                <Image
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
          path="profile/edit/images"
          element={
            <ProfileEditPanel title="Profile Picture" type={userType(user)}>
              {(data, handleChange) => (
                <Image
                  id="image"
                  data={data}
                  sx={{ mx: 1 }}
                  handleChange={handleChange}
                  label="Profile Picture"
                />
              )}
            </ProfileEditPanel>
          }
        />
        <Route
          path="profile/edit/brandheader"
          element={
            <ProfileEditPanel title="Brand Header" type={userType(user)}>
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
            <ProfileEditPanel title="Values" type={userType(user)}>
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
            <ProfileEditPanel title="Categories" type={userType(user)}>
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

export const isAuthenticated = (user) => {
  return user;
};

export const isOnboarded = (user) => {
  return isAuthenticated(user) && "custom:usertype" in user;
};

export const userType = (user) => {
  return isAuthenticated(user) && user["custom:usertype"];
};
