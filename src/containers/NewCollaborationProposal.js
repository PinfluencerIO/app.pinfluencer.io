import React from "react";
import { ProposalStep1 } from "../presentation/proposal/ProposalStep1";
import { ProposalStep2 } from "../presentation/proposal/ProposalStep2";
import { ProposalStep3 } from "../presentation/proposal/ProposalStep3";
import { MobileStepper } from "../presentation/stepper/MobileStepper";

export const NewCollaborationProposal = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Step 1",
      child: <ProposalStep1 />,
    },
    {
      label: "Step 2",
      child: <ProposalStep2 />,
    },
    {
      label: "Step 3",
      child: <ProposalStep3 />,
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
