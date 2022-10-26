import { Box } from "@mui/material";

const OnboardingHorizontalNavigation = () => {
  return (
    <Box px={2} sx={{ width: "fit-content" }}>
      Onboarding
      <Box
        sx={{
          height: "3px",
          overflowY: "hidden",
          border: "0px solid pink",
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            border: "solid 3px",
            borderColor: (theme) => theme.palette.active.main,
            borderRadius: "3px",
            padding: 0,
            margin: 0,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
export default OnboardingHorizontalNavigation;
