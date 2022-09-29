import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { getDetails } from "../api/api";

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
    <Stack rowGap={2}>
      <Typography variant="body1">
        Hi {details.name} - This is details of what is going on with your
        Pinfluencer account
      </Typography>
      <Typography bvariant="body1">
        Widgets with metrics on your campaigns and progress on Collaborations
        for {details.brand}
      </Typography>
    </Stack>
  );
};
