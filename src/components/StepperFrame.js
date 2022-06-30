import React from "react";
import { Box, Button, Container, Paper, Stack } from "@mui/material";
export const StepperFrame = ({
  numberOfSteps,
  activeStep,
  handleBack,
  handleNext,
  children,
  disableButtons,
}) => {
  return (
    <Container maxWidth="lg">
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
                disabled={activeStep === 0 || disableButtons !== null}
                variant="outlined"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={disableButtons !== null}
                variant="outlined"
              >
                {activeStep === numberOfSteps - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
};
