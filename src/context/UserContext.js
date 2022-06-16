import { createContext, useEffect, useState } from "react";
import { Auth, Hub } from "aws-amplify";

// Initialise the User Context
const UserContext = createContext();

export function UserProvider({ children }) {
  // Create state and functions for Context Provider
  // set in local storage so full page refresh works as expected
  const [user, setUser] = useState(
    localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null
  );
  const [jwt, setJWT] = useState(localStorage.getItem("jwt") ?? null);
  const signin = () => {
    Auth.federatedSignIn().catch((err) =>
      console.error("error signing in: ", err)
    );
  };
  const signout = () => {
    Auth.signOut().catch((err) => console.log("error signing out: ", err));
  };

  // Use an effect to listen on Amplify event bus for Auth events
  // SignIn and SignOut events set and unseet values in Context and LocalStorage
  useEffect(() => {
    const unsubscribe = Hub.listen("auth", (data) => {
      const { payload } = data;
      // console.log(payload.event);
      if (payload.event === "oAuthSignOut" || payload.event === "signOut") {
        setUser(null);
        localStorage.removeItem("userInfo");
        setJWT(null);
        localStorage.removeItem("jwt");
      }
      if (payload.event === "signIn") {
        setJWT(payload.data.signInUserSession.idToken.jwtToken);
        localStorage.setItem(
          "jwt",
          payload.data.signInUserSession.idToken.jwtToken
        );
        setUserInfo();
      }
    });

    async function setUserInfo() {
      try {
        const data = await Auth.currentUserPoolUser();
        const userInfo = { username: data.username, ...data.attributes };
        setUser(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
      } catch (err) {
        console.error("error: ", err);
      }
    }

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user, jwt, signin, signout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
