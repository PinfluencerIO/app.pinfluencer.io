import React from "react";
import Sidebar from "./SideBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ user, signOut, children, history }) => {
  console.log("Layout", history);
  return (
    <div className="HolyGrail">
      <Header user={user} signOut={signOut} />
      <div className="HolyGrailBody">
        <Sidebar history={history} />
        <section className="HolyGrailContent">{children}</section>
      </div>
      <Footer />
    </div>
  );
};
