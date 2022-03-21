import "./onboarding.css";
import { useState } from "react";
import { stepsStructure } from "./onboardingStructure";
import { ProgressStepper } from "../ProgressStepper/ProgressStepper";
import { AboutYou } from "./AboutYou";
import { UserType } from "./UserType";
import { UserTypeDetails } from "./UserType/UserTypeDetails";

import { Categories } from "./Categories";
import { Values } from "./Values";
import { Auth } from "aws-amplify";

export const Onboarding = ({ user }) => {
  console.log(user);
  const [active, setActive] = useState(1);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: user.attributes.email,
    userType: "",
    businessDescription: "",
    businessWebsite: "",
    instaHandle: "",
    categories: [],
    values: [],
    age13_17: 0,
    age18_24: 0,
    age25_34: 0,
    age35_44: 0,
    age45_54: 0,
    age55_64: 0,
    age65plus: 0,
    audienceGenger: "",
  });

  const onStepClick = (e) => {
    // only allow clicking on completed steps
    if (e.target.dataset.item < active) {
      setActive(parseInt(e.target.dataset.item));
    }
  };

  const onChangeCategory = (newValue) => {
    console.log("onChangeCategory.OnBoarding", newValue);
    setData((currentState) => {
      return { ...currentState, categories: newValue };
    });
  };

  const onChangeValues = (newValue) => {
    console.log("onChangeValues.OnBoarding", newValue);
    setData((currentState) => {
      return { ...currentState, values: newValue };
    });
  };

  const onChangeField = (e) => {
    console.log(e.target.name);
    setData((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  };

  const onNextClick = () => {
    console.log("onNextClicked");
    setActive(active + 1);
  };

  const onPreviousClick = () => {
    console.log("onPreviousClick");
    setActive(active - 1);
  };

  const onFinalSubmit = () => {
    console.log("final submit", data);
    alert(
      "The data from each step will be sent to the backend for processing.\nThis part is not implemented yet...stay tuned"
    );
  };

  return (
    <div className="onboardingContainer">
      <ProgressStepper
        active={active}
        stepsStructure={stepsStructure}
        onClick={onStepClick}
      />
      {active === 1 && (
        <AboutYou
          data={data}
          readOnlyEmail={
            user.attributes.identities &&
            user.attributes.email &&
            user.attributes.email !== ""
          }
          onChangeField={onChangeField}
          onNextClick={onNextClick}
        />
      )}
      {active === 2 && (
        <UserType
          data={data}
          onChangeField={onChangeField}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
        />
      )}
      {active === 3 && (
        <UserTypeDetails
          data={data}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
          onChangeField={onChangeField}
        />
      )}
      {active === 4 && (
        <Categories
          data={data}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
          onChangeCategory={onChangeCategory}
        />
      )}
      {active === 5 && (
        <Values
          data={data}
          onPreviousClick={onPreviousClick}
          onNextClick={onFinalSubmit}
          onChangeValues={onChangeValues}
        />
      )}
    </div>
  );
};
