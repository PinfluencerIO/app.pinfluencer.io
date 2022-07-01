import { styled } from "@mui/material";
import MUIButton from "@mui/material/Button";

//TODO
// deprecated: this is so messy
// fyi: rgba(109, 166, 106, .1) == pinfluencerGreen.main
// fyi: #517d4f slightly dark shade of pinfuencerGreen.main
export const Button = styled(MUIButton)(({ variant, theme, color }) => {
  variant = variant ?? "text";
  color = color ?? theme.palette.pinfluencerGreen.main;
  if (variant === "text") {
    return {
      color: color,
      "&:hover": {
        backgroundColor: "rgba(109, 166, 106, .1)",
        boxShadow: "none",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "rgba(109, 166, 106, .1)",
        borderColor: theme.palette.pinfluencerGreen.main,
        border: "0px",
      },
      "&:focus": {},
    };
  } else if (variant === "contained") {
    return {
      backgroundColor: color,
      "&:hover": {
        backgroundColor: "#517d4f",
        borderColor: theme.palette.pinfluencerGreen.main,
        border: "0px",
      },
      "&:active": {
        backgroundColor: "#517d4f",
        borderColor: theme.palette.pinfluencerGreen.main,
        border: "0px",
      },
      "&:focus": {},
    };
  } else if (variant === "outlined") {
    return {
      borderColor: theme.palette.pinfluencerGreen.main,
      border: "1px solid",
      color: color,
      "&:hover": {
        borderColor: theme.palette.pinfluencerGreen.main,
        border: "1px solid",
        backgroundColor: "rgba(109, 166, 106, .1)",
      },
      "&:active": {
        boxShadow: "none",
        backgroundColor: "rgba(109, 166, 106, .1)",
        borderColor: "black",
        border: "1px solid",
      },
      "&:focus": {},
    };
  }
});
