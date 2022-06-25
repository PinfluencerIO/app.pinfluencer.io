import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import brandIcon from "../../assets/brand-icon.jpg";
import influencerIcon from "../../assets/influencer-icon.jpg";
export const TypeOfUser = ({
  numberOfSteps,
  activeStep,
  handleBack,
  handleNext,
}) => {
  const brandCard = (
    <React.Fragment>
      <CardContent>
        <img src={brandIcon} alt="brand"></img>
        <Typography variant="h5" component="div">
          Brand
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Id nostrud anim eu excepteur ex nisi non nostrud magna.
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const influencerCard = (
    <React.Fragment>
      <CardContent>
        <img src={influencerIcon} alt="influencer"></img>
        <Typography variant="h5" component="div">
          Influencer
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Veniam cupidatat mollit commodo sit irure adipisicing sit.
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const [selected, setSelected] = useState();

  const onChangeHandler = (event, type) => {
    setSelected(type);
  };

  return (
    <Container maxWidth="sm">
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
              sx={{ maxWidth: { xs: 350, sm: 450, md: 350 } }}
            >
              <h3>Which type of user are you</h3>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 2, md: 4 }}
            >
              <ToggleButtonGroup
                sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
                value={selected}
                exclusive
                onChange={onChangeHandler}
                aria-label="Type of user"
              >
                <ToggleButton
                  minWidth={200}
                  value="brand"
                  sx={{ textTransform: "none" }}
                >
                  <Card variant="outlined">{brandCard}</Card>
                </ToggleButton>
                <ToggleButton value="influencer" sx={{ textTransform: "none" }}>
                  <Card variant="outlined">{influencerCard}</Card>
                </ToggleButton>
              </ToggleButtonGroup>
            </Stack>
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
