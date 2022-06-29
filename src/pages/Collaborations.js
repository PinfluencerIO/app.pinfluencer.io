import React, { Fragment } from "react";
import { Outlet } from "react-router";

export const Collaborations = () => {
  return (
    <Fragment>
      <div>Collaborations</div>
      <Outlet />
    </Fragment>
  );
};
