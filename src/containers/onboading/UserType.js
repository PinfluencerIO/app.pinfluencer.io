import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import {
  Card,
  CardContent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

export const UserType = ({ data, handleChange }) => {
  return (
    <Stack>
      <ToggleButtonGroup
        sx={{
          justifyContent: "space-between",
          justifyItems: "center",
        }}
        value={data}
        exclusive
        onChange={handleChange}
        aria-label="Type of user"
      >
        <ToggleButton
          value="brand"
          data-value="brand"
          sx={{ textTransform: "none", border: "0px" }}
        >
          <Card
            data-value="brand"
            variant="outlined"
            sx={{ minWidth: "110px" }}
          >
            {cardDetails(
              data,
              "brand",
              <StorefrontTwoToneIcon
                sx={{ fontSize: 40 }}
                data-value="brand"
              />,
              "Brand"
            )}
          </Card>
        </ToggleButton>
        <ToggleButton
          value="influencer"
          name="type"
          data-value="influencer"
          sx={{ textTransform: "none", border: "0px" }}
        >
          <Card
            data-value="influencer"
            variant="outlined"
            sx={{ minWidth: "110px" }}
          >
            {cardDetails(
              data,
              "influencer",
              <LiveTvTwoToneIcon
                sx={{ fontSize: 40 }}
                data-value="influencer"
              />,
              "Influencer"
            )}
          </Card>
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

const cardDetails = (data, dataValue, icon, title) => (
  <React.Fragment>
    <CardContent data-value={dataValue}>
      {icon}
      <Typography data-value={dataValue} variant="subtitle1">
        {title}
      </Typography>

      {data === dataValue ? (
        <CheckCircleOutlineIcon data-value={dataValue} />
      ) : (
        <CircleOutlinedIcon data-value={dataValue} />
      )}
    </CardContent>
  </React.Fragment>
);
