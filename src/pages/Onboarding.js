import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import { AboutYou } from "./onboarding/AboutYou";

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

  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = ["About You", "Type", "Details", "Categories", "Values"];

  return (
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: "background.pinfluencerLightGreen",
        borderTop: 1,
        borderBottom: 1,
      }}
    >
      <Grid item xs={12} sx={{ marginTop: "25px" }}>
        <Stepper
          sx={{
            backgroundColor: "background.pinfluencerLightGreen",
          }}
          activeStep={activeStep}
          alternativeLabel
        >
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
        {activeStep >= 0 && (
          <AboutYou
            numberOfSteps={steps.length}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        )}
      </Grid>
    </Grid>
  );
};
