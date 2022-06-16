import { useContext } from "react";

import UserContext from "../../context/UserContext";
import LogoHomeLink from "../LogoHomeLink";

export default function Topbar() {
  const { user, signin, signout } = useContext(UserContext);
  return (
    <header className="page-header">
      <div>
        <LogoHomeLink />
      </div>
      <h3> Header Component </h3>
      <div>
        {user ? (
          <div>
            {user.given_name}
            {", "}
            <button
              onClick={() => {
                localStorage.setItem("signout", true);
                signout();
              }}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button onClick={() => signin()}>Sign In</button>
        )}
      </div>
    </header>
  );
}
