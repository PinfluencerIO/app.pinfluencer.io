export default function isFormDataValid(data, activeStep) {
  if (activeStep === 0) {
    if (data.objective === "" || data.successDescription === "") {
      return false;
    }
  }

  if (activeStep === 1) {
    if (
      data.campaignTitle === "" ||
      data.campaignDescription === "" ||
      data.hashtag === "" ||
      data.campaignCategories.length === 0 ||
      data.campaignValues.length === 0
    ) {
      return false;
    }
  }

  if (activeStep === 2) {
    if (
      (data.productTitle !== "") &
      (data.productDescription !== "") &
      hasImage(data)
    ) {
      return true;
    } else {
      return false;
    }
  }

  return true;
}
function hasImage(data) {
  const b =
    data.productImage1 || data.productImage2 || data.productImage3
      ? true
      : false;
  console.log(b);
  return b;
}
