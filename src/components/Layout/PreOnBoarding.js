import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const PreOnboardingLayout = ({ user, signOut, children }) => {
  return (
    <div className="HolyGrail">
      <Header user={user} signOut={signOut} />
      <div className="HolyGrailBody">
        <section className="HolyGrailContent">{children}</section>
      </div>
      <Footer />
    </div>
  );
};
