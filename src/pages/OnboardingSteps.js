import { Alert, Grid, Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";
import { AboutYou } from "./onboardingFrames/AboutYou";
import { BrandDetails } from "./onboardingFrames/BrandDetails";
import { Categories } from "./onboardingFrames/Categories";
import { TypeOfUser } from "./onboardingFrames/TypeOfUser";
import { Values } from "./onboardingFrames/Values";
import { onboardingChain } from "../api/api";
import validation from "./onboardingFrames/validationRules";
import {
  backendIssue,
  processing,
  validationError,
} from "../components/Alerts";
import { StepperFrame } from "../components/StepperFrame";
const steps = ["About You", "Type", "Details", "Categories", "Values"];

export const OnboardingSteps = () => {
  // authenticated user state
  const { user, onboard } = useContext(UserContext);

  // form data, can be filled for testing purposes via localstorage
  const [data, setData] = useState(fill());

  // onboarding is made up of multiple steps, this keeps track of which step
  const [activeStep, setActiveStep] = useState(0);

  // show or hide alert
  const [showAlert, setShowAlert] = useState(null);

  // only authenticated users that haven't onboarded can see this page
  const nav = useNavigate();
  useEffect(() => {
    if (user == null || (user && "custom:usertype" in user)) {
      false && nav("/");
    }
  }, [user, nav]);

  // handle next button [validate before proceeding to next] or calling api
  const handleNext = () => {
    if (!validation(data, activeStep)) {
      setShowAlert(validationError);
      return;
    }
    setShowAlert(null);
    if (activeStep !== steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    }
    setShowAlert(processing);
    onboardingChain(data)
      .then(() => {
        onboard().then(() => {
          setShowAlert(null);
          nav("/dashboard");
        });
      })
      .catch((err) => {
        setShowAlert(backendIssue);
        console.error("An error happened calling api", err);
      });
  };

  const handleBack = () => {
    setShowAlert(null);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onChangeField = (e) => {
    // get name and value from target or data attributes
    let name = e.target.dataset?.name || e.target.name;
    let value = e.target.dataset?.value || e.target.value;

    // checkbox value comes from target.checked attribute
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    // handle nested types [brand | influencer] assignments, and return
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
    // non-nested assignments
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
        <StepperFrame
          numberOfSteps={steps.length}
          activeStep={activeStep}
          handleBack={handleBack}
          handleNext={handleNext}
        >
          {selectStepComponent()}
        </StepperFrame>

        <Alert
          sx={{
            justifyContent: "center",
            display: showAlert ? "flex" : "none",
          }}
          severity={showAlert?.severtity}
        >
          {showAlert?.message}
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

  // testing can use this function to complete the onboarding steps
  function fill() {
    const fill = localStorage.getItem("fill");
    if (fill) {
      return JSON.parse(fill);
    }

    return {
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
  }
};
