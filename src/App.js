import "./App.css";
import { Onboarding } from "./components/Onboarding/Onboarding";
import { PinfluencerMUITheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Avatar, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

Amplify.configure(withLocationDerivedRedirects(awsExports));

function App() {
  return (
    <Authenticator socialProviders={["google"]}>
      {({ signOut, user }) => (
        <ThemeProvider theme={PinfluencerMUITheme}>
          <div className="HolyGrail">
            <header>
              <div className="HolyGrailHeader" role="banner">
                <div className="HolyGrailHeaderLogo">LOGO</div>
                <div className="HolyGrailHeaderActions">
                  <div className="HolyGrailHeaderActionsCenter">
                    Header Actions
                  </div>
                  <div className="HolyGrailHeaderActionsRight">
                    {
                      <Button onClick={signOut} endIcon={<LogoutIcon />}>
                        <Avatar
                          alt={
                            user.attributes.given_name +
                            " " +
                            user.attributes.family_name
                          }
                          src={user.attributes.picture}
                        />{" "}
                        Sign out
                      </Button>
                    }
                  </div>
                </div>
              </div>
            </header>
            <main className="HolyGrailBody">
              <article className="HolyGrailContent">
                <Onboarding user={user} />
                {/* <Onboarding /> */}
              </article>
              <nav className="HolyGrailNav">
                <span>Navigation</span>
              </nav>
              <aside className="HolyGrailSidebar">
                <span>Sidebar</span>
              </aside>
            </main>
            <footer className="HolyGrailFooter">
              <p>Footer items</p>
              <p>&copy; 2022 Pinfluencer</p>
              <p>Social links</p>
            </footer>
          </div>
        </ThemeProvider>
      )}
    </Authenticator>
  );
}

export default App;

function withLocationDerivedRedirects(awsExports) {
  const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

  // Assuming you have two redirect URIs, and the first is for hosted and second is for localhost
  const [productionRedirectSignIn, localRedirectSignIn] =
    awsExports.oauth.redirectSignIn.split(",");

  const [productionRedirectSignOut, localRedirectSignOut] =
    awsExports.oauth.redirectSignOut.split(",");

  const updatedAwsConfig = {
    ...awsExports,
    oauth: {
      ...awsExports.oauth,
      redirectSignIn: isLocalhost
        ? localRedirectSignIn
        : productionRedirectSignIn,
      redirectSignOut: isLocalhost
        ? localRedirectSignOut
        : productionRedirectSignOut,
    },
  };

  Amplify.configure(updatedAwsConfig);
}
