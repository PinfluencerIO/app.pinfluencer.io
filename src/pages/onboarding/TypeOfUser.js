import React from "react";
import {
  Card,
  CardContent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
export const TypeOfUser = ({ data, handleChange }) => {
  const cardDetails = (
    dataValue,
    dataName,
    icon,
    title,
    description = "Id nostrud anim eu excepteur ex nisi non nostrud magna."
  ) => (
    <React.Fragment>
      <CardContent data-value={dataValue} data-name={dataName}>
        {/* <img
          data-value={dataValue}
          data-name={dataName}
          src={icon}
          alt={alt}
        ></img> */}
        {icon}
        <Typography
          data-value={dataValue}
          data-name={dataName}
          sx={{ typography: { sm: "h6", xs: "subtitle1" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          data-value={dataValue}
          data-name={dataName}
          sx={{ mb: 1.5, display: { xs: "none", sm: "block" } }}
        >
          {description}
        </Typography>
        {data.type === dataValue ? (
          <CheckCircleOutlineIcon data-value={dataValue} data-name={dataName} />
        ) : (
          <CircleOutlinedIcon data-value={dataValue} data-name={dataName} />
        )}
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
        <Typography variant="h4">Which type of user are you *</Typography>
        <ToggleButtonGroup
          sx={{
            justifyContent: "space-evenly",
            justifyItems: "center",
          }}
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
            sx={{ textTransform: "none", border: "0px", maxWidth: "40%" }}
          >
            <Card
              data-value="brand"
              data-name="type"
              variant="outlined"
              sx={{ minWidth: "110px" }}
            >
              {cardDetails(
                "brand",
                "type",
                <StorefrontTwoToneIcon
                  sx={{ fontSize: { xs: 40, sm: 70, md: 100 } }}
                  data-name="type"
                  data-value="brand"
                />,
                "Brand",
                "Id nostrud anim eu excepteur ex nisi non nostrud magna."
              )}
            </Card>
          </ToggleButton>
          <ToggleButton
            value="influencer"
            name="type"
            data-name="type"
            data-value="influencer"
            sx={{ textTransform: "none", border: "0px", maxWidth: "40%" }}
          >
            <Card
              data-value="influencer"
              data-name="type"
              variant="outlined"
              sx={{ minWidth: "110px" }}
            >
              {cardDetails(
                "influencer",
                "type",
                <LiveTvTwoToneIcon
                  sx={{ fontSize: { xs: 40, sm: 70, md: 100 } }}
                  data-name="type"
                  data-value="influencer"
                />,
                "Influencer",
                "Veniam cupidatat mollit commodo sit irure adipisicing sit."
              )}
            </Card>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
};
