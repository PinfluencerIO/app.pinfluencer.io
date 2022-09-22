export default function validation(data, activeStep) {
  if (activeStep === 0) {
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.email === "" ||
      data.privacy === false
    ) {
      return false;
    }
  }
  if (activeStep === 1) {
    if (data.type === "") {
      return false;
    }
  }
  if (activeStep === 2 && data.type === "brand") {
    if (data.brand.brandName === "" || data.brand.brandDescription === "") {
      return false;
    }
  }
  if (activeStep === 2 && data.type === "influencer") {
    let split =
      parseInt(data.influencer.audienceAge13To17Split) +
      parseInt(data.influencer.audienceAge18To24Split) +
      parseInt(data.influencer.audienceAge25To34Split) +
      parseInt(data.influencer.audienceAge35To44Split) +
      parseInt(data.influencer.audienceAge45To54Split) +
      parseInt(data.influencer.audienceAge55To64Split) +
      parseInt(data.influencer.audienceAge65PlusSplit);
    if (split !== 100) {
      return {
        result: false,
        message: `Audience age percentages must add up to 100% [value:${split}]`,
      };
    }

    let genderSplit =
      parseInt(data.influencer.audienceFemaleSplit) +
      parseInt(data.influencer.audienceMaleSplit);
    if (genderSplit !== 100) {
      return {
        result: false,
        message: "Gender percentages must add up to 100%",
      };
    }

    if (data.influencer.bio === "") {
      return {
        result: false,
        message: "A great bio starts your journey to great collaborations",
      };
    }

    if (data.influencer.address === "") {
      return {
        result: false,
        message:
          "Your postal address is needed to recieve products. We keep is this private, just for you and your collaborators.",
      };
    }
  }
  if (activeStep === 3 && data.categories.length === 0) {
    return false;
  }
  if (activeStep === 4 && data.values.length === 0) {
    return false;
  }
  return true;
}
