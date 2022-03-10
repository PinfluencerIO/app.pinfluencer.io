import React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./onboardingFrame.css";

// This is the repeating frame for all steps in the onboarding flow.
// title, description, input section and navigation
export const OnboardingFrame = ({
  title,
  description,
  inputs,
  onNextClick,
  onPreviousClick,
  disabledNext,
}) => {
  return (
    <div className="onboardingFrameContainer">
      <div className="onboardingFrameBorder">
        <div className="onboardingFrameHeader">
          <div className="onboardingFrameTitle">
            <span>{title}</span>
          </div>
          <div className="onboardingFrameDescription">{description}</div>
        </div>
        <div className="onboardingFrameInputsContainer">{inputs}</div>
      </div>
      <div className="onboardingFrameControls">
        <div className="backBtn">
          {onPreviousClick && (
            <Tooltip title="Go back a step">
              <Button
                variant="text"
                size="small"
                startIcon={<ArrowBackIcon />}
                onClick={onPreviousClick}
              >
                Back step
              </Button>
            </Tooltip>
          )}
        </div>
        <div className="nextBtn">
          {onNextClick && (
            <Tooltip
              title={
                disabledNext
                  ? "The form is missing required fields*"
                  : "Go to next step"
              }
            >
              <span>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  type="Submit"
                  form="form"
                  disabled={disabledNext}
                >
                  Next step
                </Button>
              </span>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  );
};
