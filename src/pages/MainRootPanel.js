// import { useContext, useEffect } from "react";
// import { useNavigate } from "react-router";
// import UserContext from "../context/UserContext";

export default function MainRootPanel() {
  /*
    Oh dear...Sorry future reader. This is a shitty attempt at controlling 
    what panel is displayed.

    2 cases

    1)  If the user isn't authenticated user == null, 
          show unauthenticated home page
            return statement

    2)  If the user is authenticated 
          and there is a redirect in local storage, 
            remove the redirect from local storage,
              and redirect to the url.

    These states and storage items work via RequiredAuth and SignOut button in Topbar
  */
  // const { user } = useContext(UserContext);
  // const nav = useNavigate();
  // useEffect(() => {
  //   const url = localStorage.getItem("redirect");
  //   if (url && user) {
  //     localStorage.removeItem("redirect");
  //     nav(url);
  //   }
  // }, [nav, user]);

  return <div>Homepage</div>;
}
