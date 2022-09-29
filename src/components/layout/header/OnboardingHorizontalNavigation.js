import { Box, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";

export const OnboardingHorizontalNavigation = () => {
  const nav = useNavigate();
  return (
    <ListItem
      sx={{
        padding: 0,
        margin: 0,
        justifyContent: "flex-start",
      }}
    >
      <ListItemButton
        sx={{
          padding: "0 16px",
          margin: 0,
          flexDirection: "column",
          flex: "0 1 auto",
        }}
        onClick={() => {
          nav("onboarding");
        }}
      >
        <ListItemText
          sx={{
            color: (theme) => theme.palette.common.black,
            whiteSpace: "nowrap",
            border: "0px solid green",
          }}
          primary="Onboarding"
        />
        <Box
          sx={{
            height: "3px",
            overflowY: "hidden",
            padding: "0 2px",
            border: "0px solid pink",
            width: "100%",
          }}
        >
          <Box
            sx={{
              border: location.pathname.toLowerCase().includes("onboarding")
                ? "solid 3px"
                : "none 0px",
              borderColor: (theme) => theme.palette.active.main,
              borderRadius: "3px",
              minWidth: "24px",
              width: "100%",
            }}
          ></Box>
        </Box>
      </ListItemButton>
    </ListItem>
  );
};
