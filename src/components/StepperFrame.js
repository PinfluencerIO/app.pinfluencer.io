import React from "react";
import { Box, Button, Paper, Stack } from "@mui/material";
export const StepperFrame = ({
  numberOfSteps,
  activeStep,
  handleBack,
  handleNext,
  children,
}) => {
  return (
    <Paper sx={{ minWidth: 350 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={{ xs: 2, md: 4 }}
        m={{ xs: 2, md: 4 }}
        sx={{ minWidth: 350 }}
      >
        <Stack spacing={{ xs: 2, sm: 2, md: 4 }} sx={{ width: "80%" }}>
          {children}
          <Box display="flex" justifyContent="space-between">
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
      </Box>
    </Paper>
  );
};
