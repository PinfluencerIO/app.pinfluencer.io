import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";

export const Onboarding = () => {
  const { user, onboard } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const nav = useNavigate();
  useEffect(() => {
    // if user is not logged in
    // or
    // redirect if user is available and that user has completed onboarding
    if (user == null || (user && "custom:type" in user)) {
      nav("/");
    }
  }, [user, nav]);
  return (
    <div>
      Onboarding{" "}
      <div>
        {!loading ? (
          <button
            onClick={() => {
              setLoading(true);
              onboard();
            }}
          >
            on board this user
          </button>
        ) : (
          <div>updating user please wait...</div>
        )}
      </div>
    </div>
  );
};
