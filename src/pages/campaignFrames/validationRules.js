export default function isFormDataValid(data, activeStep) {
  if (activeStep === 0) {
    console.log(data);
    if (data.objective === "" || data.successDescription === "") {
      return false;
    }
  }

  return true;
}
