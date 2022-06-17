import { createContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";
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
    const current = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    const response = await Auth.updateUserAttributes(current, {
      "custom:type": "brand",
    });
    if (response === "SUCCESS") {
      const updateUser = getUserDataFromStorage();
      setUser(updateUser);
    }
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
          setUser(u.attributes);
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
export const getToken = () => {
  return localStorage.getItem(`${authStoragePrefix()}.${lastAuth()}.idToken`);
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

/* Example User attributes from Amplify Auth 
{
  "UserAttributes":[
    {
      "Name":"sub",
      "Value":"0a834f86-0811-459e-a6cb-474b6c0d704f"
    },
    {
      "Name":"identities",
      "Value":"[{\"userId\":\"106146319509880568839\",\"providerName\":\"Google\",\"providerType\":\"Google\",\"issuer\":null,\"primary\":true,\"dateCreated\":1654535345973}]"
    },
    {
      "Name":"email_verified",
      "Value":"false"
    },
    {
      "Name":"given_name",
      "Value":"Dominic"
    },
    {
      "Name":"family_name",
      "Value":"Farr"
    },
    {
      "Name":"email",
      "Value":"dom@pinfluencer.io"
    }
  ],
  "Username":"google_106146319509880568839"
}


*/
