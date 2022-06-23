import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        "Comfortaa,Arial, Helvetica, Verdana, Trebuchet MS, Gill Sans",
    },
    fontFamily: "Comfortaa,Arial, Helvetica, Verdana, Trebuchet MS, Gill Sans",
  },
  palette: {
    pinfluencerGreen: {
      main: "#6DA66A",
      contrastText: "#ffffff",
    },
    background: {
      pinfluencerLightGreen: "#F4FBF3",
    },
    secondary: {
      main: "#1976d2",
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    ...baseTheme.palette,
  },
});

export default lightTheme;
