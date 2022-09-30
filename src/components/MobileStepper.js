import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUIMobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { BrandDescription } from "../pages/onboading/BrandDescription";
import { BrandDetails } from "../pages/onboading/BrandDetails";
import { InfluencerBio } from "../pages/onboading/InfluencerBio";
import { InfluencerDetails } from "../pages/onboading/InfluencerDetails";
import { UserType } from "../pages/onboading/UserType";
import { YourDetails } from "../pages/onboading/YourDetails";

export function MobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [type, setType] = React.useState("");
  const [maxSteps, setMaxSteps] = React.useState(9);
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleDataChange = (event) => {
    setData((currentState) => {
      return { ...currentState, [event.target.name]: event.target.value };
    });
  };
  const brandSteps = [
    {
      label: "NameEmail",
      child: <YourDetails data={data} handleChange={handleDataChange} />,
    },
    {
      label: "BrandDetails",
      child: <BrandDetails data={data} handleChange={handleDataChange} />,
    },
    { label: <BrandDescription data={data} handleChange={handleDataChange} /> },
    { label: "BrandLogo" },
    { label: "BrandHeader" },
    { label: "Values" },
    { label: "Categories" },
  ];
  const influencerSteps = [
    {
      label: "NameEmail",
      child: <YourDetails data={data} handleChange={handleDataChange} />,
    },
    {
      label: "InfluencerDetails",
      child: <InfluencerDetails data={data} handleChange={handleDataChange} />,
    },
    {
      label: "Bio",
      child: <InfluencerBio data={data} handleChange={handleDataChange} />,
    },
    { label: "Picture" },
    { label: "AudienceAge" },
    { label: "AudienceGender" },
    { label: "Values" },
    { label: "Categories" },
  ];

  const handleChange = (event) => {
    setType(event.currentTarget.dataset.value);
    setMaxSteps(
      event.currentTarget.dataset.value === "brand"
        ? brandSteps.length + 1
        : influencerSteps.length + 1
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
      ? brandSteps[activeStep - 1]
      : influencerSteps[activeStep - 1];
  };

  const handleNext = () => {
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
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
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
      />
    </Box>
  );
}
