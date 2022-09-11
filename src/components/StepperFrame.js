import React from "react";
import { Alert, AlertTitle, Box, Button, Paper, Stack } from "@mui/material";
export const StepperFrame = ({
  numberOfSteps,
  activeStep,
  handleBack,
  handleNext,
  showAlert,
  children,
}) => {
  return (
    <Paper sx={{ mb: 3 }} elevation={3}>
      <Stack>
        {children}

        <Box
          display="flex"
          justifyContent="center"
          marginBottom={3}
          sx={{ display: showAlert ? "flex" : "none" }}
        >
          <Alert
            severity={showAlert?.severtity}
            sx={{ width: { xs: "300px", sm: "400px", md: "500px" } }}
          >
            <AlertTitle>
              {showAlert?.severtity === "error" ? "Ooops" : ""}
            </AlertTitle>
            {showAlert?.message}
          </Alert>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          px={{ xs: 2, sm: 5, md: 5 }}
          pb={{ xs: 2, sm: 5, md: 5 }}
        >
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            variant="outlined"
          >
            Back
          </Button>
          <Button onClick={handleNext} variant="outlined">
            {activeStep === numberOfSteps - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
};
