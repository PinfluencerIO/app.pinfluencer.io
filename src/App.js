import "./App.css";
import { Onboarding } from "./components/Onboarding";
import { Route, Switch, useLocation } from "react-router-dom";
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
  const [onboarded, setOnBoarded] = useState(
    "custom:onboarded" in user.attributes
  );

  return location.pathname === "/" ? (
    onboarded ? (
      <Redirect to="/dashboard" />
    ) : (
      <Redirect to="/onboarding" />
    )
  ) : (
    <Route
      render={(props) => {
        return onboarded ? (
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
        ) : (
          <PreOnboardingLayout signOut={signOut} user={user}>
            <Onboarding user={user} setOnBoarded={setOnBoarded} />
          </PreOnboardingLayout>
        );
      }}
    />
  );
}

export default App;
