import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { onboardingChain } from "../../api/onboarding";
import { MobileStepper } from "../../presentation/stepper/MobileStepper";
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
    image: undefined,
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

  const [feedback, setFeedback] = React.useState(null);
  const [disabledNext, setDisabledNext] = React.useState(false);

  const handleChange = (event) => {
    setType(event.currentTarget.dataset.value);
    setMaxSteps(
      event.currentTarget.dataset.value === "brand"
        ? stepsForBrand.length + 1
        : stepsForInfluencers.length + 1
    );
  };

  const handleDataChange = (event) => {
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

  useEffect(() => {
    function defineFeedback(data, activeStep) {
      if (activeStep === 0 && type === "") {
        setFeedback("A type is required");
        return;
      }
      if (
        activeStep === 1 &&
        (!data.familyName || !data.givenName || !data.email)
      ) {
        console.log("invalid step 1");
        setFeedback("All fields are required");
        setDisabledNext(true);
        return;
      }

      if (activeStep === 2 && (!data.instaHandle || !data.address)) {
        setFeedback("Instagram and Address are required");
        setDisabledNext(true);

        return;
      }

      if (activeStep === 3 && type === "influencer" && !data.bio) {
        setFeedback("A nice bio is required");
        setDisabledNext(true);

        return;
      }

      if (activeStep === 4 && type === "influencer" && !data.image) {
        setFeedback("A picture is required");
        setDisabledNext(true);

        return;
      }
      if (activeStep === 5 && type === "influencer" && !validAge(data)) {
        setFeedback("Make sure it all adds up to 100 🙏");
        setDisabledNext(true);

        return;
      }
      if (activeStep === 6 && type === "influencer" && !validGenderData(data)) {
        setFeedback("Make sure it all adds up to 100 👌");
        setDisabledNext(true);

        return;
      }
      if (
        activeStep === 7 &&
        type === "influencer" &&
        !data.values.length > 0
      ) {
        setFeedback("Add all your important values");
        setDisabledNext(true);

        return;
      }
      if (
        activeStep === 8 &&
        type === "influencer" &&
        data.categories.length == 0
      ) {
        setFeedback("Add all your categories");
        setDisabledNext(true);

        return;
      }
      if (
        activeStep === 8 &&
        type === "influencer" &&
        data.categories.length > 0
      ) {
        setFeedback("When ready, submit your onboarding");
        setDisabledNext(false);

        return;
      }
      setFeedback("When ready, go to next step");
      setDisabledNext(false);
    }
    defineFeedback(data, activeStep);
  }, [type, data, activeStep]);

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

  const executeFinal = async () => {
    setFeedback("Processing...");
    cleanDataForType(data, type);
    const response = await onboardingChain(data, type, onboard);
    if (typeof response == "boolean") {
      console.error("api return boolean not influencer object");
      setFeedback("Sorry, something didn't work. Contact Pinfluencer 🙏");
      return;
    }

    nav("/dashboard");
  };
  return (
    <MobileStepper
      step={step}
      maxSteps={maxSteps}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      executeFinal={executeFinal}
      disabledNext={disabledNext}
      feedback={feedback}
    />
  );

  function validAge(data) {
    return data && true;
  }

  function validGenderData(data) {
    return data && true;
  }
};
