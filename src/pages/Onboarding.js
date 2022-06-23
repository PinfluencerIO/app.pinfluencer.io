import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";

export const Onboarding = () => {
  const { user } = useContext(UserContext);
  const nav = useNavigate();
  useEffect(() => {
    // if user is not logged in
    // or
    // redirect if user is available and that user has completed onboarding
    if (user == null || (user && "custom:usertype" in user)) {
      nav("/");
    }
  }, [user, nav]);

  return <div>Onboarding</div>;
};
