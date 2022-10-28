import { Auth, Hub } from "aws-amplify";
import { createContext, useEffect, useState } from "react";
import { config } from "../aws/aws";

// Initialise the User Context
const UserContext = createContext();

export function UserProvider({ children }) {
  // Create state and functions for Context Provider
  // set from local storage initially, so full page refresh works as expected
  const [user, setUser] = useState(getUserDataFromStorage());
  const [redirect, setRedirect] = useState();
  const signin = (url = null) => {
    const state = { customState: url };
    Auth.federatedSignIn(state).catch((err) =>
      console.error("error signing in: ", err)
    );
  };
  const signout = () => {
    Auth.signOut().catch((err) => console.log("error signing out: ", err));
  };

  async function onboard() {
    await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    const updateUser = getUserDataFromStorage();
    setUser(updateUser);
  }

  // Use an effect to listen on Amplify event bus for Auth events
  useEffect(() => {
    const unsubscribe = Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "oAuthSignOut" || payload.event === "signOut") {
        console.log("SignOut event");
      }
      if (payload.event === "signIn") {
        console.log("SignIn event");
        Auth.currentUserPoolUser({ bypassCache: true }).then((u) => {
          u.attributes["custom:usertype"] = "brand"; // TODO REMOVE WHEN API IS FIXED
          setUser(u.attributes);
          console.log("Current USER is FAKE");
        });
      }
      if (payload.event === "customOAuthState") {
        console.log("CustomOAuthState event", payload.data);
        setRedirect(payload.data);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider
      value={{ user, signin, signout, onboard, redirect, setRedirect }}
    >
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;

//Storage key: CognitoIdentityServiceProvider.userPoolWebClientId.lastAuthId.idToken
export const getToken = async () => {
  const jwt = getAccessJwtToken();
  return jwt;
};

const getAccessJwtToken = async () => {
  // Auth.currentSession() checks if token is expired and refreshes with Cognito if needed automatically
  const session = await Auth.currentSession();
  const jwt = session.getAccessToken().getJwtToken();

  return jwt;
};

/*
  Auth.federatedSignIn adds data into local storage about authenticated user
  This func gets that data cleans it up a little and returns
  
  Storage key: CognitoIdentityServiceProvider.userPoolWebClientId.lastAuthId.userData
*/
const getUserDataFromStorage = () => {
  const user = localStorage.getItem(
    `${authStoragePrefix()}.${lastAuth()}.userData`
  );
  if (user) {
    return parseUserToAtrributes(JSON.parse(user));
  }
  return user;
};

const parseUserToAtrributes = (user) => {
  let result = {};
  user.UserAttributes.map((i) => (result[i.Name] = i.Value));
  return result;
};

//Storage key: CognitoIdentityServiceProvider.userPoolWebClientId.LastAuthUser
const lastAuth = () => {
  return localStorage.getItem(`${authStoragePrefix()}.LastAuthUser`);
};

// Prefix to all Amplify Auth Storage keys
const authStoragePrefix = () => {
  return `CognitoIdentityServiceProvider.${config.userPoolWebClientId}`;
};
