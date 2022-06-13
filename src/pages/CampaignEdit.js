import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCampaigns } from "../fake_db/data";
import formToObject from "./formToObject";

export default function CampaignEdit() {
  const [imageSrc, setImageSrc] = useState();
  const [campaign, setCampaign] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeField = (e) => {
    let value = e.target.value;
    if (e.target.type === "select-multiple") {
      value = a(e.target.options);
    }

    setCampaign((currentState) => {
      return { ...currentState, [e.target.name]: value };
    });
  };

  function a(options) {
    const selectedOptions = [];
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i]);
        selectedValues.push(options[i].value);
      }
    }
    return selectedValues;
  }

  useEffect(() => {
    console.log("effect");
    const campaign = getCampaigns().find((x) => x.id === parseInt(id));
    if (!campaign) return <div>Ouch!</div>;
    setCampaign(campaign);
  }, [id]);

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
  function put(obj) {
    obj.productImage1 = imageSrc;
    obj.status = campaign.status;
    obj.creationDate = campaign.creationDate;
    fetch("http://localhost:3000/campaigns/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/campaigns?id=" + data.id);
        console.log("Nav to table:");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="page-main">
      <h2>Campaign Edit</h2>
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
              put(obj);
            }}
          >
            <fieldset>
              <legend>Objectives</legend>
              <label htmlFor="objective">Select Objective</label>
              <select
                id="objective"
                name="objective"
                value={campaign ? campaign?.objective : ""}
                onChange={onChangeField}
              >
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
                value={campaign ? campaign?.successDescription : ""}
                onChange={onChangeField}
              ></textarea>
            </fieldset>
            <fieldset>
              <legend>Campaign</legend>
              <label htmlFor="campaignTitle">Title</label>
              <input
                type="text"
                id="campaignTitle"
                name="campaignTitle"
                value={campaign ? campaign?.campaignTitle : ""}
                onChange={onChangeField}
              ></input>
              <label htmlFor="campaignDescription">Description</label>
              <textarea
                rows="10"
                cols="30"
                id="campaignDescription"
                name="campaignDescription"
                value={campaign ? campaign?.campaignDescription : ""}
                onChange={onChangeField}
              ></textarea>
              <label htmlFor="objective">Categories</label>
              <select
                id="campaignCategories"
                name="campaignCategories"
                multiple
                value={campaign ? campaign?.campaignCategories : []}
                onChange={onChangeField}
              >
                {[
                  "Category 1",
                  "Second Category",
                  "3rd Category",
                  "Nothing Category",
                  "Sutainable",
                  "Ethical",
                  "Fashion",
                  "Food",
                  "Pet",
                  "Fitness",
                ].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <span
                style={{
                  textTransform: "none",
                  textAlign: "left",
                  fontSize: ".8rem",
                  paddingTop: "3px",
                  color: "gray",
                }}
              >
                Select up to 5
              </span>
              <label htmlFor="objective">Values</label>
              <select
                id="campaignValues"
                name="campaignValues"
                multiple
                value={campaign ? campaign?.campaignValues : []}
                onChange={onChangeField}
              >
                {[
                  "Value 1",
                  "Second Value",
                  "3rd Value",
                  "Nothing Value",
                  "Important ",
                  "Ethical",
                  "Vegan",
                  "Integrity",
                  "Honesty",
                  "Fairness",
                ].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <span
                style={{
                  textTransform: "none",
                  textAlign: "left",
                  fontSize: ".8rem",
                  paddingTop: "3px",
                  color: "gray",
                }}
              >
                Select up to 5
              </span>
              <label htmlFor="campaignProductLink">Product Link</label>
              <input
                type="text"
                id="campaignProductLink"
                name="campaignProductLink"
                value={campaign ? campaign?.campaignProductLink : ""}
                onChange={onChangeField}
              ></input>

              <label htmlFor="campaignHashtag">Hashtag</label>
              <input
                type="text"
                id="campaignHashtag"
                name="campaignHashtag"
                value={campaign ? campaign?.campaignHashtag : ""}
                onChange={onChangeField}
              ></input>

              <label htmlFor="campaignDiscountCode">Discount code</label>
              <input
                type="text"
                id="campaignDiscountCode"
                name="campaignDiscountCode"
                value={campaign ? campaign?.campaignDiscountCode : ""}
                onChange={onChangeField}
              ></input>
            </fieldset>
            <fieldset>
              <legend>Product</legend>
              <label htmlFor="productTitle">Product Title</label>
              <input
                type="text"
                id="productTitle"
                name="productTitle"
                value={campaign ? campaign?.productTitle : ""}
                onChange={onChangeField}
              ></input>

              <label htmlFor="productDescription">Product Description</label>
              <textarea
                rows="10"
                cols="30"
                id="productDescription"
                name="productDescription"
                value={campaign ? campaign?.productDescription : ""}
                onChange={onChangeField}
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
                  visibility: campaign ? "visible" : "hidden",
                }}
                id="preview"
                src={campaign ? campaign?.productImage1 : ""}
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
