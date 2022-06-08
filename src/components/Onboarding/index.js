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
import { useHistory } from "react-router-dom";

import { createBrand } from "../../services/onboardBrand";

export const Onboarding = ({ user, token, setOnboarded }) => {
  const history = useHistory();
  const [active, setActive] = useState(1);
  const [data, setData] = useState({
    firstName: user?.attributes?.given_name,
    lastName: user?.attributes?.family_name,
    email: user?.attributes?.email,
    userType: "",
    brandName: "",
    brandDescription: "",
    website: "",
    instaHandle: "",
    categories: [],
    values: [],
    age13To17: 0,
    age18To24: 0,
    age25To34: 0,
    age35To44: 0,
    age45To54: 0,
    age55To64: 0,
    age65Plus: 0,
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

  const updateUserAttributes = async () => {
    const userLoaded = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    await Auth.updateUserAttributes(userLoaded, {
      "custom:onboarded": "true",
    });
    setOnboarded(true);
    history.push("/dashboard");
  };

  const onFinalSubmit = () => {
    console.log("final submit data", data);
    // console.log("with token", token);

    createBrand(token, data)
      .then((json) => {
        console.log("json response from post brand/me", json);
        updateUserAttributes();
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
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
            user?.attributes?.identities && user?.attributes?.email !== ""
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
