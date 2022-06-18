import { Hub, Auth as Amp } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

export const Auth = () => {
  const [user, setUser] = useState(null);
  const [setCustomState] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    Amp.currentAuthenticatedUser()
      .then((currentUser) => setUser(currentUser))
      .catch(() => console.log("Not signed in"));

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <button
        onClick={() =>
          Amp.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Facebook,
          })
        }
      >
        Open Facebook
      </button>
      <button
        onClick={() =>
          Amp.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Google,
          })
        }
      >
        Open Google
      </button>
      <button onClick={() => Amp.federatedSignIn()}>Open Hosted UI</button>
      {user && (
        <button onClick={() => Amp.signOut()}>
          Sign Out {user.getUsername()}
        </button>
      )}
    </div>
  );
};
