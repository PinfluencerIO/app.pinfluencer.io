import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import { PinfluencerMUITheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { withLocationDerivedRedirects } from "./utils/AWSAuthRedirect";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
Amplify.configure(withLocationDerivedRedirects(awsExports));

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={PinfluencerMUITheme}>
      <BrowserRouter>
        <Authenticator hideSignUp={true}>
          {({ signOut, user }) => <App signOut={signOut} user={user} />}
        </Authenticator>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
