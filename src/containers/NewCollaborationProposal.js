import React from "react";
import { MobileStepper } from "../presentation/stepper/MobileStepper";

export const NewCollaborationProposal = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Step 1",
      child: "Step 1",
    },
    {
      label: "Step 2",
      child: "Step 2",
    },
    {
      label: "Step 3",
      child: "step 3",
    },
  ];

  const step = () => {
    return steps[activeStep];
  };

  return (
    <MobileStepper
      step={step}
      maxSteps={3}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      executeFinal={() => {
        console.log("final submit");
      }}
    />
  );
};
