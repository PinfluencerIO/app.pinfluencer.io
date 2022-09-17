import { createTheme, responsiveFontSizes } from "@mui/material/styles";

function createFontFamily(fontFamily) {
  return {
    fontFamily,
    // [baseTheme.breakpoints.down("sm")]: {
    //   fontSize: 16,
    // },
    // [baseTheme.breakpoints.up("sm")]: {
    //   fontSize: 18,
    // },
    // [baseTheme.breakpoints.up("md")]: {
    //   fontSize: 20,
    // },
    // [baseTheme.breakpoints.up("lg")]: {
    //   fontSize: 24,
    // },
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
    subtitle1: { fontFamily },
    subtitle2: { fontFamily },
    body1: { fontFamily },
    body2: { fontFamily },
    button: { fontFamily },
    caption: { fontFamily },
    overline: { fontFamily },
  };
}

const baseTheme = createTheme();
const customTheme = createTheme(baseTheme, {
  typography: createFontFamily("Comfortaa"),
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          "& button": {
            // [baseTheme.breakpoints.up("sm")]: {
            //   minWidth: "90px",
            // },
            // [baseTheme.breakpoints.only("sm")]: {
            //   minWidth: "80px",
            //   fontSize: "small",
            // },
            // [baseTheme.breakpoints.only("xs")]: {
            //   minWidth: "50px",
            //   fontSize: "x-small",
            // },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#000",
    },

    active: {
      main: "#6DA66A",
    },
  },
  drawerWidth: 197,
});

const pinfluencerTheme = responsiveFontSizes(customTheme);
console.log(pinfluencerTheme);
export default pinfluencerTheme;
