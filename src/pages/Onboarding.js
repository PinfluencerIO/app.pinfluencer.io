import { Grid, Step, StepLabel, Stepper } from "@mui/material";
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

  const steps = ["About You", "Type", "Details", "Categories", "Values"];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ margin: "25px 0px" }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "background.pinfluencerLightGreen",
        }}
      >
        <Grid
          container
          sx={{
            border: "1px solid",
            margin: "40px 0",
            backgroundColor: "white",
            width: "400px",
          }}
        >
          <Grid item sx={{ margin: "auto;" }}>
            FORM
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
