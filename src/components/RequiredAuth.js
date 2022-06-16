import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

import UserContext from "../context/UserContext";

export default function RequireAuth({ children }) {
  const { user, signin } = useContext(UserContext);
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      if (localStorage.getItem("signout")) {
        localStorage.removeItem("signout");
        nav("/");
      } else {
        localStorage.setItem("redirect", location.pathname);
        signin();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return children;
}
