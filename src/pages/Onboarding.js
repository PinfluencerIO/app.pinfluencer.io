import {
  Grid,
  Paper,
  Step,
  StepLabel,
  Stepper,
  styled,
  useTheme,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import UserContext from "../context/UserContext";

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

  const Item = styled(Paper)(({ theme, background, mb }) => ({
    backgroundColor: background
      ? background
      : theme.palette.background.pinfluencerLightGreen,
    ...theme.typography.body1,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: mb ? mb : 0,
  }));

  const steps = ["About You", "Type", "Details", "Categories", "Values"];
  const theme = useTheme();
  console.log("theme", { theme });
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item background={"#FFF"} elevation={0}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Item>
      </Grid>
      <Grid item xs={12}>
        <Item mb={20}>FORM</Item>
      </Grid>
    </Grid>
  );
};
