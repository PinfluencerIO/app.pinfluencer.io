import "./App.css";
import { Onboarding } from "./components/Onboarding/Onboarding";
import { PinfluencerMUITheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

Amplify.configure(awsExports);

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
                        Sign out
                      </Button>
                    }
                  </div>
                </div>
              </div>
            </header>
            <main className="HolyGrailBody">
              <article className="HolyGrailContent">
                {/* <Onboarding user={user} /> */}
                <Onboarding />
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
