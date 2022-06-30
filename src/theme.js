import { createTheme } from "@mui/material";

const pinfluencerGreen = "#6DA66A";
//MuiStepLabel-label.Mui-active
const baseTheme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-completed": {
            color: pinfluencerGreen,
          },
          "&.Mui-active": {
            color: pinfluencerGreen,
          },
          "&.Mui-active text": {
            fontSize: "large",
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          "&.Mui-active": {
            color: pinfluencerGreen,
          },
        },
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily:
        "Comfortaa,Arial, Helvetica, Verdana, Trebuchet MS, Gill Sans",
    },
    fontFamily: "Comfortaa,Arial, Helvetica, Verdana, Trebuchet MS, Gill Sans",
  },
  palette: {
    primary: {
      main: pinfluencerGreen,
      contrastText: "#FFF",
    },
    pinfluencerGreen: {
      main: pinfluencerGreen,
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
