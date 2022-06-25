import React from "react";
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
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import brandIcon from "../../assets/brand-icon.jpg";
import influencerIcon from "../../assets/influencer-icon.jpg";
export const TypeOfUser = ({
  data,
  handleChange,
  numberOfSteps,
  activeStep,
  handleBack,
  handleNext,
}) => {
  const theme = useTheme();

  const brandCard = (
    <React.Fragment>
      <CardContent data-value="brand" data-name="type">
        <img
          data-value="brand"
          data-name="type"
          src={brandIcon}
          alt="brand"
        ></img>
        <Typography
          data-value="brand"
          data-name="type"
          variant="h5"
          component="div"
        >
          Brand
        </Typography>
        <Typography
          data-value="brand"
          data-name="type"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          Id nostrud anim eu excepteur ex nisi non nostrud magna.
        </Typography>
        {data.type === "brand" ? (
          <CheckCircleOutlineIcon
            sx={{ color: theme.palette.pinfluencerGreen.main }}
          />
        ) : (
          <CircleOutlinedIcon />
        )}
      </CardContent>
    </React.Fragment>
  );

  const influencerCard = (
    <React.Fragment>
      <CardContent data-value="influencer" data-name="type">
        <img
          data-value="influencer"
          data-name="type"
          src={influencerIcon}
          alt="influencer"
        ></img>
        <Typography
          data-value="influencer"
          data-name="type"
          variant="h5"
          component="div"
        >
          Influencer
        </Typography>
        <Typography
          data-value="influencer"
          data-name="type"
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          Veniam cupidatat mollit commodo sit irure adipisicing sit.
        </Typography>
        {data.type === "influencer" ? (
          <CheckCircleOutlineIcon
            sx={{ color: theme.palette.pinfluencerGreen.main }}
          />
        ) : (
          <CircleOutlinedIcon />
        )}
      </CardContent>
    </React.Fragment>
  );

  return (
    <Container maxWidth="sm">
      <Paper sx={{ minWidth: 350 }}>
        <Box
          maxWidth="sm"
          display="flex"
          // justifyContent="space-between"
          // alignItems="center"
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
                value={data.type}
                name="type"
                exclusive
                onChange={handleChange}
                aria-label="Type of user"
              >
                <ToggleButton
                  value="brand"
                  data-name="type"
                  data-value="brand"
                  sx={{ textTransform: "none" }}
                >
                  <Card data-value="brand" data-name="type" variant="outlined">
                    {brandCard}
                  </Card>
                </ToggleButton>
                <ToggleButton
                  value="influencer"
                  name="type"
                  data-name="type"
                  data-value="influencer"
                  sx={{ textTransform: "none" }}
                >
                  <Card
                    data-value="influencer"
                    data-name="type"
                    variant="outlined"
                  >
                    {influencerCard}
                  </Card>
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
