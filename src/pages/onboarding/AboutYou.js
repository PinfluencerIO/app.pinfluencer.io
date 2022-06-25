import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
export const AboutYou = ({
  numberOfSteps,
  activeStep,
  handleBack,
  handleNext,
}) => {
  console.log(numberOfSteps, activeStep, handleBack, handleNext);
  return (
    <Container maxWidth="sm" sx={{}}>
      <Paper sx={{ minWidth: 350 }}>
        <Box
          maxWidth="sm"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={{ xs: 2, md: 4 }}
          m={{ xs: 2, md: 4 }}
        >
          <Stack spacing={{ xs: 2, sm: 2, md: 4 }}>
            <Stack
              spacing={1}
              display={{ md: "block" }}
              sx={{ maxWidth: { xs: 350, sm: 450, md: 450 } }}
            >
              <h3>Welcome to Pinfluencer</h3>
              <p>
                To get you started, please complete this quick onboarding
                process
              </p>
            </Stack>
            <TextField
              sx={{ maxWidth: { xs: 350, sm: 450, md: 450 } }}
              id="email"
              label="Email"
              variant="outlined"
              autoComplete="false"
            />
            <Stack
              spacing={{ xs: 2 }}
              direction={{ xs: "column", sm: "row" }}
              sx={{ maxWidth: { xs: 350, sm: 450, md: 450 } }}
            >
              <TextField
                sx={{ width: { xs: 350, sm: 450, md: 225 } }}
                id="firstName"
                label="First Name"
                variant="outlined"
                autoComplete="false"
              />
              <TextField
                sx={{ width: { xs: 350, sm: 450, md: 225 } }}
                id="LastName"
                label="Last Name"
                variant="outlined"
                autoComplete="false"
              />
            </Stack>
            <FormControlLabel
              sx={{
                justifyContent: "start",
                maxWidth: { xs: 350, sm: 450 },
              }}
              labelPlacement="start"
              control={<Checkbox />}
              label="You have read and agree to our privacy policy"
            />
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
    </Container>
  );
};
