import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import { AboutYou } from "./onboarding/AboutYou";
import { TypeOfUser } from "./onboarding/TypeOfUser";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const formData = {
    email: "",
    firstName: "",
    lastName: "",
    type: "",
    privacy: false,
    brand: {
      brandName: "",
      instaHandle: "",
      brandDescription: "",
      website: "",
      brandLogo: "",
    },
    influencer: {
      instaHandle: "",
      website: "",
      bio: "",
      audienceA13To17Split: 0,
      audienceA18To24Split: 0,
      audienceA25To34Split: 0,
      audienceA35To44Split: 0,
      audienceA45To54Split: 0,
      audienceA55To64Split: 0,
      audienceA65PlusSplit: 0,
      audienceFemaleSplit: 0,
      audienceMaleSplit: 0,
    },
    categories: [],
    values: [],
  };
  const [data, setData] = useState(formData);

  // const onChangeCategory = (newValue) => {
  //   console.log("onChangeCategory.OnBoarding", newValue);
  //   setData((currentState) => {
  //     return { ...currentState, categories: newValue };
  //   });
  // };

  // const onChangeValues = (newValue) => {
  //   console.log("onChangeValues.OnBoarding", newValue);
  //   setData((currentState) => {
  //     return { ...currentState, values: newValue };
  //   });
  // };

  const onChangeField = (e) => {
    console.log("onChangeField ", e.target);

    let name = e.target.dataset?.name || e.target.name;
    let value = e.target.dataset?.value || e.target.value;

    if (e.target.type === "checkbox") {
      console.log("Is checked", e.target.checked);
      value = e.target.checked;
    }
    setData((currentState) => {
      return { ...currentState, [name]: value };
    });
  };

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
        {activeStep === 0 && (
          <AboutYou
            data={data}
            handleChange={onChangeField}
            numberOfSteps={steps.length}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        )}
        {activeStep === 1 && (
          <TypeOfUser
            data={data}
            handleChange={onChangeField}
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
