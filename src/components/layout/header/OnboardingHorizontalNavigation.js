import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export const OnboardingHorizontalNavigation = () => {
  return (
    <ListItem
      sx={{
        padding: 0,
        margin: 0,
      }}
    >
      <ListItemButton
        sx={{
          padding: "0 16px",
          margin: 0,
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
      </ListItemButton>
    </ListItem>
  );
};
