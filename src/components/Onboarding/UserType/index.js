import "./onboardingUserType.css";
import { OnboardingFrame } from "../OnboardingFrame/OnboardingFrame";

import React from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const UserType = ({
  data,
  onChangeField,
  onNextClick,
  onPreviousClick,
}) => {
  return (
    <OnboardingFrame
      title="Onboarding UserType"
      description="Please select the type of user"
      inputs={
        <form id="form" noValidate autoComplete="off" onSubmit={onSubmit()}>
          <div>
            <RadioGroup
              name="userType"
              row
              onChange={onChangeField}
              value={data.userType}
            >
              <FormControlLabel
                value="brand"
                control={<Radio />}
                label="Brand"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="influencer"
                control={<Radio />}
                label="Influencer"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </div>
        </form>
      }
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      disabledNext={data.userType.length < 1}
    />
  );

  function onSubmit() {
    return (e) => {
      console.log("submit");
      e.preventDefault();
      onNextClick();
    };
  }
};
