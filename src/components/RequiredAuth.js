import { useContext, useEffect } from "react";
import { useLocation } from "react-router";

import UserContext from "../context/UserContext";

export default function RequireAuth({ children }) {
  const { user, signin } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      signin(location.pathname);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return children;
}
