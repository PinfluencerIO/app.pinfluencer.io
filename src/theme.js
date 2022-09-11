import { createTheme, responsiveFontSizes } from "@mui/material";

const baseTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        "Comfortaa,Arial, Helvetica, Verdana, Trebuchet MS, Gill Sans",
    },
    fontFamily: "Comfortaa,Arial, Helvetica, Verdana, Trebuchet MS, Gill Sans",
  },
  components: {
    MuiButton: {
      // styleOverrides: {
      //   text: {
      //     color: "#fcba03",
      //   },
      //   outlined: {
      //     color: "#fcba03",
      //   },
      // },
    },
  },
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFF",
    },
  },
});

export default responsiveFontSizes(baseTheme);
