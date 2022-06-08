import "./App.css";
import { Auth } from "@aws-amplify/auth";
import { Onboarding } from "./components/Onboarding";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PreOnboardingLayout } from "./components/Layout/PreOnBoarding";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Collaborations from "./pages/Collaborations";
import NotFound from "./pages/NotFound";

import { Redirect } from "react-router-dom";
import { useState } from "react";

function App({ signOut, user }) {
  const location = useLocation();
  const [onboarded, setOnboarded] = useState(
    "custom:onboarded" in user.attributes
  );

  const [token, setToken] = useState(null);

  function getToken() {
    return Auth.currentSession()
      .then((session) => session)
      .catch((err) => console.log(err));
  }

  getToken().then((userToken) => setToken(userToken.idToken.jwtToken));

  // if pre onboarded, redirect to onboarding no matter what the url is.

  if (onboarded) {
    if (location.pathname === "/") {
      return <Redirect to="/dashboard" replace />;
    } else {
      return (
        <Route
          render={(props) => {
            return (
              <Layout user={user} signOut={signOut} {...props}>
                <Switch>
                  <Route path="/dashboard" exact>
                    <Dashboard userType="brand" />
                  </Route>
                  <Route path="/campaigns" component={Campaigns} />
                  <Route path="/collaborations">
                    <Collaborations />
                  </Route>
                  <Route path="/onboarding">
                    <Redirect to="/dashboard" />
                  </Route>
                  <Route component={NotFound} />
                </Switch>
              </Layout>
            );
          }}
        />
      );
    }
  } else if (location.pathname !== "/onboarding") {
    return <Redirect to="/onboarding" replace />;
  } else {
    return (
      <PreOnboardingLayout signOut={signOut} user={user}>
        <Onboarding user={user} token={token} setOnboarded={setOnboarded} />
      </PreOnboardingLayout>
    );
  }
}

export default App;
