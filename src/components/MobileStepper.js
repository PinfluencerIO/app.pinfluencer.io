import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUIMobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  brandSteps,
  cleanDataOf,
  influencerSteps,
} from "../pages/onboading/steps";
import { UserType } from "../pages/onboading/UserType";

export function MobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [type, setType] = React.useState("");
  const [maxSteps, setMaxSteps] = React.useState(9);
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    brandName: "",
    instaHandle: "",
    website: "",
    address: "",
    bio: "",
    profilePicture: "",
    audienceAge: "",
    audienceGender: "",
    brandLogo: "",
    brandHeader: "",
    values: [],
    categories: [],
  });

  const handleDataChange = (event) => {
    setData((currentState) => {
      return { ...currentState, [event.target.name]: event.target.value };
    });
  };

  const handleListChange = (event, key) => {
    setData((currentState) => {
      const items = currentState[key];
      if (items.includes(event)) {
        var filtered = items.filter(function (value) {
          return value !== event;
        });
        return {
          ...currentState,
          [key]: filtered,
        };
      }
      return {
        ...currentState,
        [key]: items.concat(event),
      };
    });
  };

  const stepsForBrand = brandSteps(data, handleDataChange, handleListChange);
  const stepsForInfluencers = influencerSteps(
    data,
    handleDataChange,
    handleListChange
  );

  const handleChange = (event) => {
    setType(event.currentTarget.dataset.value);
    setMaxSteps(
      event.currentTarget.dataset.value === "brand"
        ? stepsForBrand.length + 1
        : stepsForInfluencers.length + 1
    );
  };

  const step = () => {
    if (activeStep === 0) {
      return {
        label: "Type",
        child: <UserType data={type} handleChange={handleChange} />,
      };
    }

    return type === "brand"
      ? stepsForBrand[activeStep - 1]
      : stepsForInfluencers[activeStep - 1];
  };

  const handleNext = () => {
    if (activeStep + 1 == maxSteps) {
      console.log("submit");
      cleanDataOf(type, data);
      console.log(data);
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{step(activeStep).label}</Typography>
      </Box>
      <Box
        sx={{
          height: 255,
          maxWidth: 400,
          width: "100%",
          p: 2,
        }}
      >
        {step(activeStep).child}
      </Box>
      <MUIMobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {activeStep === maxSteps - 1 ? "Submit" : "Next"}
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        sx={{ "& .MuiLinearProgress-root": { width: "44%" } }}
      />
    </Box>
  );
}
