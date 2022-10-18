import { ThemeProvider } from "@mui/material";
import UserContext from "../context/UserContext";
import pinfluencerTheme from "../style/theme";

export default function underTest(
  user,
  testChild,
  theme = pinfluencerTheme,
  onboard = undefined
) {
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user: user, onboard: onboard }}>
        {testChild}
      </UserContext.Provider>
    </ThemeProvider>
  );
}
