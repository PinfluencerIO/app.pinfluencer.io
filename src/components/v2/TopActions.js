import React from "react";
import { BreadcrumbComponent } from "../Breadcrumbs";

export const TopActions = ({ children }) => {
  return (
    <>
      <BreadcrumbComponent />
      {children}
    </>
  );
};
