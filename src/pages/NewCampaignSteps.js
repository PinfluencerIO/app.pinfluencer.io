import { Alert, Box, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { processing } from "../components/Alerts";
import { StepperFrame } from "../components/StepperFrame";
import { CampaignFrame } from "./campaignFrames/CampaignFrame";
import { ObjectivesFrame } from "./campaignFrames/ObjectivesFrame";
import { ProductFrame } from "./campaignFrames/ProductFrame";

export function NewCampaignSteps() {
  const steps = ["Objective", "Campaign", "Product"];
  // form data, can be filled for testing purposes via localstorage
  const [data, setData] = useState(fill());
  const onChangeField = (e) => {
    setData((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  };

  // onboarding is made up of multiple steps, this keeps track of which step
  const [activeStep, setActiveStep] = useState(0);
  // show or hide alert
  const [showAlert, setShowAlert] = useState(null);
  // handle next button [validate before proceeding to next] or calling api
  const handleNext = () => {
    setShowAlert(null);
    if (activeStep !== steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      return;
    } else {
      setShowAlert(processing);
    }
  };
  const handleBack = () => {
    setShowAlert(null);
    if (activeStep !== 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      return;
    }
  };
  return (
    <Box
      spacing={0}
      sx={{
        backgroundColor: "background.pinfluencerLightGreen",
        borderTop: 1,
        borderBottom: 1,
      }}
    >
      <Box sx={{ marginTop: "25px" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>
        <StepperFrame
          handleBack={handleBack}
          handleNext={handleNext}
          numberOfSteps={steps.length}
          disableButtons={showAlert}
          activeStep={activeStep}
        >
          {selectStepComponent()}
        </StepperFrame>
      </Box>
      <Alert
        sx={{
          justifyContent: "center",
          display: showAlert ? "flex" : "none",
        }}
        severity={showAlert?.severtity}
      >
        {showAlert?.message}
      </Alert>
    </Box>
  );
  function selectStepComponent() {
    let step;
    switch (activeStep) {
      case 0:
        step = <ObjectivesFrame data={data} handleChange={onChangeField} />;
        break;
      case 1:
        step = <CampaignFrame data={data} handleChange={onChangeField} />;
        break;
      case 2:
        step = <ProductFrame data={data} handleChange={onChangeField} />;
        break;
    }
    return step;
  }

  function fill() {
    return {
      objective: "",
    };
  }
}

// export default function CampaignFlow() {
//   const [imageSrc, setImageSrc] = useState();

//   function previewFile() {
//     const preview = document.getElementById("preview");
//     const file = document.querySelector("input[type=file]").files[0];
//     const reader = new FileReader();

//     reader.addEventListener(
//       "load",
//       function () {
//         // convert image file to base64 string
//         preview.src = reader.result;
//         setImageSrc(reader.result);
//       },
//       false
//     );

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   }

//   return (
//     <div className="page-main">
//       <h2>Campaign flow</h2>
//       <section style={{ paddingBottom: "1rem" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             border: "1px solid",
//           }}
//         >

//           <fieldset>
//             <legend>Objectives</legend>
//             <label htmlFor="objective">Select Objective</label>
//             <select id="objective" name="objective">
//               <option selected disabled>
//                 Select Objective
//               </option>
//               <option value="new">
//                 I&apos;m launching a new product or service
//               </option>
//               <option value="awareness">
//                 I&apos;m aiming to drive awareness about my product or service
//               </option>
//               <option value="baseline">
//                 I&apos;m looking to develop baseline metrics
//               </option>
//               <option value="content">
//                 I&apos;m sourcing content to use in my own channels
//               </option>
//               <option value="trial">
//                 I&apos;m trialing influencer marketing or Pinfluencer
//               </option>
//               <option value="other">Other</option>
//             </select>
//             <label htmlFor="successDescription">
//               What does success look like
//             </label>
//             <textarea
//               rows="10"
//               cols="30"
//               id="successDescription"
//               name="successDescription"
//             ></textarea>
//           </fieldset>
//           <fieldset>
//             <legend>Campaign</legend>
//             <label htmlFor="campaignTitle">Title</label>
//             <input type="text" id="campaignTitle" name="campaignTitle"></input>
//             <label htmlFor="campaignDescription">Description</label>
//             <textarea
//               rows="10"
//               cols="30"
//               id="campaignDescription"
//               name="campaignDescription"
//             ></textarea>
//             <label htmlFor="objective">Categories</label>
//             <CategoriesSelect
//               id="campaignCategories"
//               name="campaignCategories"
//             />

//             <label htmlFor="objective">Values</label>
//             <ValuesSelect id="campaignValues" name="campaignValues" />

//             <label htmlFor="campaignProductLink">Product Link</label>
//             <input
//               type="text"
//               id="campaignProductLink"
//               name="campaignProductLink"
//             ></input>

//             <label htmlFor="campaignHashtag">Hashtag</label>
//             <input
//               type="text"
//               id="campaignHashtag"
//               name="campaignHashtag"
//             ></input>

//             <label htmlFor="campaignDiscountCode">Discount code</label>
//             <input
//               type="text"
//               id="campaignDiscountCode"
//               name="campaignDiscountCode"
//             ></input>
//           </fieldset>
//           <fieldset>
//             <legend>Product</legend>
//             <label htmlFor="productTitle">Product Title</label>
//             <input type="text" id="productTitle" name="productTitle"></input>

//             <label htmlFor="productDescription">Product Description</label>
//             <textarea
//               rows="10"
//               cols="30"
//               id="productDescription"
//               name="productDescription"
//             ></textarea>
//             <label htmlFor="productDescription">Product Image 1</label>
//             <input
//               type="file"
//               id="productImage1"
//               name="productImage1"
//               onChange={previewFile}
//               style={{ paddingBottom: "10px" }}
//             ></input>
//             <img
//               style={{
//                 visibility: imageSrc != undefined ? "visible" : "hidden",
//               }}
//               id="preview"
//               src=""
//               height="40"
//               width="40"
//               alt="preview"
//             ></img>
//           </fieldset>
//           <button type="submit">Submit</button>
//           {/* </form> */}
//         </div>
//       </section>
//     </div>
//   );
// }
