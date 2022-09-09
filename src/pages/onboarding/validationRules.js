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
    if (
      data.influencer.audienceA13To17Split === "" ||
      data.influencer.audienceA18To24Split === "" ||
      data.influencer.audienceA25To34Split === "" ||
      data.influencer.audienceA35To44Split === "" ||
      data.influencer.audienceA45To54Split === "" ||
      data.influencer.audienceA55To64Split === "" ||
      data.influencer.audienceA65PlusSplit === "" ||
      data.influencer.audienceFemaleSplit === "" ||
      data.influencer.audienceMaleSplit === "" ||
      data.influencer.instaHandle === "" ||
      data.influencer.bio === "" ||
      data.influencer.address === ""
    ) {
      return false;
    }

    let genderSplit =
      parseInt(data.influencer.audienceFemaleSplit) +
      parseInt(data.influencer.audienceMaleSplit);
    console.log(genderSplit);
    if (genderSplit !== 100) {
      return {
        result: false,
        message: "Gender percentages must add up to 100%",
      };
    }
    let split =
      parseInt(data.influencer.audienceA13To17Split) +
      parseInt(data.influencer.audienceA25To34Split) +
      parseInt(data.influencer.audienceA35To44Split) +
      parseInt(data.influencer.audienceA45To54Split) +
      parseInt(data.influencer.audienceA55To64Split) +
      parseInt(data.influencer.audienceA65PlusSplit);
    console.log(split);
    if (split !== 100) {
      return {
        result: false,
        message: "Audience age percentages must add up to 100%",
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
