import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Box, Paper } from "@mui/material";
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
  disabledNext,
  feedback,
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
    <Paper
      variant="outlined"
      sx={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        maxWidth: "600px",
        height: "450px",
        p: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{ margin: "0 auto 48px", border: "0px pink solid" }}
      >
        {step(activeStep).label}
      </Typography>
      {step(activeStep).child}
      <Box sx={{ flexGrow: 1 }}></Box>
      <MUIMobileStepper
        variant="progress"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={disabledNext}>
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
      />
      <Typography variant="subtitle1" sx={{ margin: "0 auto" }}>
        {feedback}
      </Typography>
    </Paper>
  );
}
