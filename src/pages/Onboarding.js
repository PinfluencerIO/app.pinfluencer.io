import { Alert, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import { AboutYou } from "./onboarding/AboutYou";
import { BrandDetails } from "./onboarding/BrandDetails";
import { Categories } from "./onboarding/Categories";
import { Frame } from "./onboarding/Frame";
import { TypeOfUser } from "./onboarding/TypeOfUser";
import { Values } from "./onboarding/Values";

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
  const [showError, setShowError] = React.useState();
  const handleNext = () => {
    if (activeStep === 0) {
      if (
        data.firstName === "" ||
        data.lastName === "" ||
        data.email === "" ||
        data.privacy === false
      ) {
        setShowError(true);
        return;
      }
    }
    if (activeStep === 1) {
      if (data.type === "") {
        setShowError(true);
        return;
      }
    }
    if (activeStep === 2 && data.type === "brand") {
      if (data.brand.brandName === "" || data.brand.brandDescription === "") {
        setShowError(true);
        return;
      }
    }
    if (activeStep === 2 && data.type === "influencer") {
      if (
        data.influencer.audienceA13To17Split === "" ||
        data.influencer.audienceA18To24Split === "" ||
        data.influencer.audienceA25To34Split === "" ||
        data.influencer.audienceA35To44Split === "" ||
        data.influencer.audienceA45To54Split === "" ||
        data.influencer.audienceA55To64Split === "" ||
        data.influencer.audienceA65PlusSplit === "" ||
        data.influencer.audienceFemaleSplit === "" ||
        data.influencer.audienceMaleSplit === "" ||
        data.influencer.instaHandle === "" ||
        data.influencer.bio === ""
      ) {
        setShowError(true);
        return;
      }
    }
    if (activeStep === 3 && data.categories.length === 0) {
      setShowError(true);
      return;
    }
    if (activeStep === 4 && data.values.length === 0) {
      setShowError(true);
      return;
    }
    console.log("privacy", data.privacy);
    setShowError(false);
    activeStep !== steps.length - 1 &&
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setShowError(false);
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
      brandHeader: "",
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

    if (name.includes(".")) {
      const keys = name.split(".");
      setData((currentState) => {
        return {
          ...currentState,
          [keys[0]]: {
            ...currentState[keys[0]],
            [keys[1]]: value,
          },
        };
      });
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
        <Frame
          numberOfSteps={steps.length}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        >
          {selectStepComponent()}
        </Frame>

        <Alert
          id="error"
          sx={{
            justifyContent: "center",
            display: showError ? "flex" : "none",
          }}
          severity="error"
        >
          All fields with * are required
        </Alert>
      </Grid>
    </Grid>
  );

  function selectStepComponent() {
    let step;
    switch (activeStep) {
      case 0:
        step = <AboutYou data={data} handleChange={onChangeField} />;
        break;
      case 1:
        step = <TypeOfUser data={data} handleChange={onChangeField} />;
        break;
      case 2:
        if (data.type === "brand") {
          step = <BrandDetails data={data} handleChange={onChangeField} />;
          break;
        }
        if (data.type === "influencer") {
          step = <div>influencer details</div>;
          break;
        }
        step = <div>Failed to select type...go back one step</div>;
        break;
      case 3:
        step = <Categories data={data} handleChange={onChangeField} />;
        break;
      case 4:
        step = <Values data={data} handleChange={onChangeField} />;
        break;
    }
    return step;
  }
};
