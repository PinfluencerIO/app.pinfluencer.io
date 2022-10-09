import React from "react";
import { useNavigate } from "react-router";
import { onboardingChain } from "../../api/onboarding";
import { MobileStepper } from "../../components/MobileStepper";
import { brandSteps, cleanDataForType, influencerSteps } from "./steps";
import { UserType } from "./UserType";

export const OnboardingSteps = ({ onboard, user }) => {
  const nav = useNavigate();

  const [maxSteps, setMaxSteps] = React.useState(9);
  const [type, setType] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = React.useState({
    givenName: user.given_name,
    familyName: user.family_name,
    email: user.email,
    brandName: "",
    instaHandle: "",
    website: "",
    address: "",
    bio: "",
    image: user.picture,
    audienceAge13To17Split: 0,
    audienceAge18To24Split: 0,
    audienceAge25To34Split: 0,
    audienceAge35To44Split: 0,
    audienceAge45To54Split: 0,
    audienceAge55To64Split: 0,
    audienceAge65PlusSplit: 0,
    audienceFemaleSplit: 0,
    audienceMaleSplit: 0,
    brandLogo: "",
    brandHeader: "",
    values: [],
    categories: [],
  });

  const handleChange = (event) => {
    setType(event.currentTarget.dataset.value);
    setMaxSteps(
      event.currentTarget.dataset.value === "brand"
        ? stepsForBrand.length + 1
        : stepsForInfluencers.length + 1
    );
  };

  const handleDataChange = (event) => {
    console.log("handleDataChange", event.target.name, event.target.value);
    setData((currentState) => {
      return { ...currentState, [event.target.name]: event.target.value };
    });
  };

  const handleListChange = (event, key) => {
    setData((currentState) => {
      const items = currentState[key];
      if (items.includes(event)) {
        var filtered = items.filter(function (value) {
          return value !== event;
        });
        return {
          ...currentState,
          [key]: filtered,
        };
      }
      return {
        ...currentState,
        [key]: items.concat(event),
      };
    });
  };
  const stepsForBrand = brandSteps(data, handleDataChange, handleListChange);
  const stepsForInfluencers = influencerSteps(
    data,
    handleDataChange,
    handleListChange
  );
  const step = () => {
    if (activeStep === 0) {
      return {
        label: "Type",
        child: <UserType data={type} handleChange={handleChange} />,
      };
    }

    return type === "brand"
      ? stepsForBrand[activeStep - 1]
      : stepsForInfluencers[activeStep - 1];
  };

  const executeFinal = () => {
    cleanDataForType(data, type);
    onboardingChain(data, type, onboard)
      .then(() => {
        nav("/dashboard");
      })
      .catch((err) => {
        console.error("An error happened calling api", err);
      });
    return;
  };
  // This object will come into play when mobile AND full is completed
  return (
    <MobileStepper
      step={step}
      maxSteps={maxSteps}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      executeFinal={executeFinal}
    />
  );
};
