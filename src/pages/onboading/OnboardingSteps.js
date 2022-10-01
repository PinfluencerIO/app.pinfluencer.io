import React from "react";
import { MobileStepper } from "../../components/MobileStepper";

export const OnboardingSteps = ({ onboard }) => {
  // This object will come into play when mobile AND full is completed
  return <MobileStepper onboard={onboard} />;
};
