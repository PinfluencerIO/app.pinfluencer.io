import { createTheme, responsiveFontSizes } from "@mui/material/styles";

function createFontFamily(fontFamily) {
  return {
    fontFamily,
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
  typography: createFontFamily("Comfortaa, Arial, sans-serif"),
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {},
        "& #root": {
          minWidth: "320px",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: 0,
        },
        html: {
          minWidth: "320px",
          maxWidth: "1024px",
          margin: "0 auto",
          padding: 0,
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
export default pinfluencerTheme;
