import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newCampaing } from "../api/api";
import { CategoriesSelect } from "../components/CategoriesSelect";
import { ValuesSelect } from "../components/ValuesSelect";
import formToObject from "./formToObject";

export default function CampaignFlow() {
  const [imageSrc, setImageSrc] = useState();
  const navigate = useNavigate();

  function previewFile() {
    const preview = document.getElementById("preview");
    const file = document.querySelector("input[type=file]").files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        // convert image file to base64 string
        preview.src = reader.result;
        setImageSrc(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="page-main">
      <h2>Campaign flow</h2>
      <section style={{ paddingBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const obj = formToObject(document.forms[0]);
              obj.productImage1 = imageSrc;
              obj.status = "Draft";
              obj.userId = localStorage.getItem("userId");
              newCampaing(obj)
                .then((response) => response.json())
                .then((data) => {
                  navigate("/campaigns?id=" + data.id);
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}
          >
            <fieldset>
              <legend>Objectives</legend>
              <label htmlFor="objective">Select Objective</label>
              <select id="objective" name="objective">
                <option selected disabled>
                  Select Objective
                </option>
                <option value="new">
                  I&apos;m launching a new product or service
                </option>
                <option value="awareness">
                  I&apos;m aiming to drive awareness about my product or service
                </option>
                <option value="baseline">
                  I&apos;m looking to develop baseline metrics
                </option>
                <option value="content">
                  I&apos;m sourcing content to use in my own channels
                </option>
                <option value="trial">
                  I&apos;m trialing influencer marketing or Pinfluencer
                </option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="successDescription">
                What does success look like
              </label>
              <textarea
                rows="10"
                cols="30"
                id="successDescription"
                name="successDescription"
              ></textarea>
            </fieldset>
            <fieldset>
              <legend>Campaign</legend>
              <label htmlFor="campaignTitle">Title</label>
              <input
                type="text"
                id="campaignTitle"
                name="campaignTitle"
              ></input>
              <label htmlFor="campaignDescription">Description</label>
              <textarea
                rows="10"
                cols="30"
                id="campaignDescription"
                name="campaignDescription"
              ></textarea>
              <label htmlFor="objective">Categories</label>
              <CategoriesSelect
                id="campaignCategories"
                name="campaignCategories"
              />

              <label htmlFor="objective">Values</label>
              <ValuesSelect id="campaignValues" name="campaignValues" />

              <label htmlFor="campaignProductLink">Product Link</label>
              <input
                type="text"
                id="campaignProductLink"
                name="campaignProductLink"
              ></input>

              <label htmlFor="campaignHashtag">Hashtag</label>
              <input
                type="text"
                id="campaignHashtag"
                name="campaignHashtag"
              ></input>

              <label htmlFor="campaignDiscountCode">Discount code</label>
              <input
                type="text"
                id="campaignDiscountCode"
                name="campaignDiscountCode"
              ></input>
            </fieldset>
            <fieldset>
              <legend>Product</legend>
              <label htmlFor="productTitle">Product Title</label>
              <input type="text" id="productTitle" name="productTitle"></input>

              <label htmlFor="productDescription">Product Description</label>
              <textarea
                rows="10"
                cols="30"
                id="productDescription"
                name="productDescription"
              ></textarea>
              <label htmlFor="productDescription">Product Image 1</label>
              <input
                type="file"
                id="productImage1"
                name="productImage1"
                onChange={previewFile}
                style={{ paddingBottom: "10px" }}
              ></input>
              <img
                style={{
                  visibility: imageSrc != undefined ? "visible" : "hidden",
                }}
                id="preview"
                src=""
                height="40"
                width="40"
                alt="preview"
              ></img>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
