import { styled } from "@mui/material";
import MUIButton from "@mui/material/Button";

export const Button = styled(MUIButton)(({ variant, theme }) => {
  if (variant === "text") {
    return {
      color: theme.palette.pinfluencerGreen.main,
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
      backgroundColor: theme.palette.pinfluencerGreen.main,
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
      color: theme.palette.pinfluencerGreen.main,
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
