export const typeSwitch = (type, brandResult, influencerResult) => {
  switch (type) {
    case "brand":
      return brandResult;
    case "influencer":
      return influencerResult;
    default:
      throw Error("No type defined for switch");
  }
};
