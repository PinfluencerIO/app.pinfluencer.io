import { Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { getDetails } from "../api/api";
import { BaseComponent } from "./BaseComponent";

export const Dashboard = () => {
  const [details, setDetails] = React.useState({ name: "null", brand: "null" });
  useEffect(() => {
    let dets = sessionStorage.getItem("details");
    if (!dets) {
      getDetails().then((data) => {
        sessionStorage.setItem("details", JSON.stringify(data));
        setDetails(data);
      });
    } else {
      setDetails(JSON.parse(dets));
    }
  }, []);

  return (
    <BaseComponent
      heading="Your Pinfluencer Dashboard"
      disableBorder
      variant="h3"
    >
      <Typography variant="body1">
        Hi {details.name} - This is details of what is going on with your
        Pinfluencer account
      </Typography>
      <Typography bvariant="body1">
        Widgets with metrics on your campaigns and progress on Collaborations
        for {details.brand}
      </Typography>
    </BaseComponent>
  );
};
