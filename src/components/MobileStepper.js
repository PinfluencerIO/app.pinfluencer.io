import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MUIMobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function MobileStepper({
  step,
  maxSteps,
  activeStep,
  setActiveStep,
  executeFinal,
}) {
  const theme = useTheme();

  const handleNext = () => {
    if (activeStep + 1 == maxSteps) {
      return executeFinal();
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
