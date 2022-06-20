import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { ValuesSelect } from "../components/ValuesSelect";
import { CategoriesSelect } from "../components/CategoriesSelect";
import processForm from "./formToObject";
import { brandLogo, onboarding } from "../api/api";

export const Onboarding = () => {
  const { user, onboard: cogupdate } = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState();
  const [processing, setProcessing] = useState(false);
  const [brandDetailsShow, setBrandDetailsShow] = useState(false);
  const [influencerDetailsShow, setInfluencerDetailsShow] = useState(false);
  const updateDetails = (e) => {
    console.log(e.target.value);
    setBrandDetailsShow(e.target.value === "brand");
    setInfluencerDetailsShow(e.target.value !== "brand");
  };

  const nav = useNavigate();
  useEffect(() => {
    // if user is not logged in
    // or
    // redirect if user is available and that user has completed onboarding
    if (user == null || (user && "custom:usertype" in user)) {
      nav("/");
    }
  }, [user, nav]);

  return (
    <div className="page-main">
      <h2>Onboarding flow</h2>

      <div
        id="myModal"
        className="modal"
        style={{ display: processing ? "block" : "none" }}
      >
        <div className="modal-content">
          <p>Processing...</p>
        </div>
      </div>

      <section style={{ paddingBottom: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setProcessing(true);
              const typeOfForm = document.querySelector(
                'input[name = "type"]:checked'
              ).value;
              const payload = processForm(document.forms[0], typeOfForm);

              onboarding(payload)
                .then((response) => response.json())
                .then((data) => {
                  console.log("response from onboarding post", data);
                  if (typeOfForm === "brand") {
                    brandLogo(data.id, { image_bytes: imageSrc }).catch(
                      (err) => {
                        console.log("logo post failed", err);
                      }
                    );
                  }
                })
                .then(() => {
                  cogupdate(typeOfForm).then(() => setProcessing(false));
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }}
          >
            <fieldset>
              <legend>About you</legend>
              <label htmlFor="firstName">
                First name:{" "}
                {user?.given_name ? (
                  <span>{user.given_name}</span>
                ) : (
                  <input type="text" name="firstName" data-type="shared" />
                )}
              </label>
              <label htmlFor="lastName">
                Last name:{" "}
                {user?.family_name ? (
                  <span>{user.family_name}</span>
                ) : (
                  <input type="text" name="lastName" data-type="shared" />
                )}
              </label>
              <label htmlFor="email">
                Email:{" "}
                {user?.email ? (
                  <span>{user.email}</span>
                ) : (
                  <input type="text" name="email" data-type="shared" />
                )}
              </label>
              <span>Privacy Policy</span>
              <span style={{ color: "gray" }}>
                We know you care about how your personal information is used and
                shared, so we take your privacy seriously
              </span>
              <span style={{ color: "gray" }}>
                <Link style={{ color: "gray" }} to="/privacy-policy.html">
                  Read Full Policy
                </Link>
              </span>
              <label htmlFor="privacy">
                Check to agree to this policy
                <input type="checkbox" name="privacy" data-type="shared" />
              </label>
            </fieldset>
            <fieldset>
              <legend>Type</legend>
              <label>
                Brand{" "}
                <input
                  onChange={(e) => updateDetails(e)}
                  type="radio"
                  value="brand"
                  name="type"
                  data-type="shared"
                />
              </label>
              <label>
                Influencer{" "}
                <input
                  onChange={(e) => updateDetails(e)}
                  type="radio"
                  value="influencer"
                  name="type"
                  data-type="shared"
                />
              </label>
            </fieldset>
            <fieldset
              style={{
                display: brandDetailsShow ? "grid" : "none",
              }}
            >
              <legend>Brand Details</legend>
              <label htmlFor="brandName">
                Brand Name
                <input type="text" name="brandName" data-type="brand" />
              </label>
              <label htmlFor="instaHandle">
                Instagram Name
                <input type="text" name="instaHandle" data-type="shared" />
              </label>
              <label htmlFor="brandDescription">
                Description
                <textarea
                  rows="10"
                  cols="30"
                  name="brandDescription"
                  data-type="brand"
                />
              </label>
              <label htmlFor="website">
                Website <input type="text" name="website" data-type="shared" />
              </label>
              <label htmlFor="businessLogo">Business Logo</label>
              <input
                type="file"
                name="businessLogo"
                onChange={previewFile}
                style={{ paddingBottom: "10px" }}
                data-type="brand"
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
            <fieldset
              style={{
                display: influencerDetailsShow ? "grid" : "none",
              }}
            >
              <legend>Influencer Details</legend>
              <label htmlFor="instaHandle">
                Instagram Name
                <input type="text" name="instaHandle" data-type="shared" />
              </label>
              <label htmlFor="website">
                Website
                <input type="text" name="website" data-type="shared" />
              </label>
              <label htmlFor="bio">
                Bio
                <textarea
                  rows="10"
                  cols="30"
                  name="bio"
                  data-type="influencer"
                />
              </label>
              <fieldset>
                <legend>Audience</legend>
                <label htmlFor="audienceA13To17Split">
                  13 - 17
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA13To17Split"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceA18To24Split">
                  18 - 23
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA18To24Split"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceA25To34Split">
                  25 - 34
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA25To34Split"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceA35To44Split">
                  35 - 44
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA35To44Split"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceA45To54Split">
                  45 - 54
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA45To54Split"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceA55To64Split">
                  55 - 64
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA55To64Split"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceA65PlusSplit">
                  65+
                  <input
                    placeholder="%"
                    type="text"
                    name="audienceA65PlusSplit"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceFemaleSplit">
                  Female percentage
                  <input
                    placeholder="%"
                    type="input"
                    name="audienceFemaleSplit"
                    data-type="influencer"
                  />
                </label>
                <label htmlFor="audienceMaleSplit">
                  Male percentage
                  <input
                    placeholder="%"
                    type="input"
                    name="audienceMaleSplit"
                    data-type="audienceMaleSplit"
                  />
                </label>
              </fieldset>
            </fieldset>
            <fieldset>
              <legend>Categories</legend>
              <CategoriesSelect />
            </fieldset>
            <fieldset>
              <legend>Value</legend>

              <ValuesSelect />
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );

  //TODO this was copy/paste crime. Make a component
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
};
