import React from "react";
import {
  Card,
  CardContent,
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
export const TypeOfUser = ({ data, handleChange }) => {
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
            data-value="brand"
            data-name="type"
            sx={{ color: theme.palette.pinfluencerGreen.main }}
          />
        ) : (
          <CircleOutlinedIcon data-value="brand" data-name="type" />
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
            data-value="influencer"
            data-name="type"
            sx={{ color: theme.palette.pinfluencerGreen.main }}
          />
        ) : (
          <CircleOutlinedIcon data-value="influencer" data-name="type" />
        )}
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <Stack
        spacing={1}
        display={{ md: "block" }}
        sx={{ maxWidth: { xs: 350 } }}
      >
        <h3>Which type of user are you *</h3>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "column" }}
        spacing={{ xs: 2, sm: 2, md: 4 }}
      >
        <ToggleButtonGroup
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
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
            <Card data-value="influencer" data-name="type" variant="outlined">
              {influencerCard}
            </Card>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};
