import { Stack } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { getDetails } from "../api/api";
import HeaderAndValue from "../components/HeaderAndValue";

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
    <Stack spacing={3}>
      <HeaderAndValue
        header="Your Pinfluencer Dashboard"
        value={
          <React.Fragment>
            <p>
              Hi {details.name} - This is details of what is going on with your
              Pinfluencer account
            </p>
            <p>
              Widgets with metrics on your campaigns and progress on
              Collaborations for {details.brand}
            </p>
          </React.Fragment>
        }
      />
    </Stack>
  );
};
