export default function isFormDataValid(data, activeStep) {
  if (activeStep === 0) {
    return data.objective !== "" && data.successDescription !== "";
  }

  if (activeStep === 1) {
    return (
      data.campaignTitle !== "" &&
      data.campaignDescription !== "" &&
      data.hashtag !== "" &&
      data.campaignCategories.length !== 0 &&
      data.campaignValues.length !== 0
    );
  }

  if (activeStep === 2) {
    return (
      (data.productTitle !== "") &
      (data.productDescription !== "") &
      hasImage(data)
    );
  }

  return true;
}
function hasImage(data) {
  const b =
    data.productImage1 || data.productImage2 || data.productImage3
      ? true
      : false;
  return b;
}
