import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { Amplify, Authenticator } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import { withLocationDerivedRedirects } from "./utils/AWSAuthRedirect";
import awsExports from "./aws-exports";

import App from "./App";
import { PinfluencerMUITheme } from "./theme";

Amplify.configure(withLocationDerivedRedirects(awsExports));

render(
  <React.StrictMode>
    <ThemeProvider theme={PinfluencerMUITheme}>
      <BrowserRouter>
        {/* <Authenticator hideSignUp={true}>
          {({ signOut, user }) => <App signOut={signOut} user={user} />}
        </Authenticator> */}
        <App signOut={{}} user={{ attributes: {} }} />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
