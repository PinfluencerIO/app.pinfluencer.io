import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import UserContext, { getToken } from "../context/UserContext";
import formToObject from "./formToObject";
import { ValuesSelect } from "../components/ValuesSelect";
import { CategoriesSelect } from "../components/CategoriesSelect";

export const Onboarding = () => {
  const { user } = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState();
  const [brandDetailsShow, setBrandDetailsShow] = useState(false);
  const [influencerDetailsShow, setInfluencerDetailsShow] = useState(false);
  const navigate = useNavigate();

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
    if (user == null || (user && "custom:type" in user)) {
      nav("/");
    }
  }, [user, nav]);
  return (
    <div className="page-main">
      <h2>Onboarding flow</h2>
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
              const obj = formToObject(document.forms[0]);
              post(obj);
            }}
          >
            <fieldset>
              <legend>About you</legend>
              <label htmlFor="firstName">
                First name:{" "}
                {user?.given_name ? (
                  <span>{user.given_name}</span>
                ) : (
                  <input type="text" name="firstName" id="firstName" />
                )}
              </label>
              <label htmlFor="lastName">
                Last name:{" "}
                {user?.family_name ? (
                  <span>{user.family_name}</span>
                ) : (
                  <input type="text" name="lastName" id="lastName" />
                )}
              </label>
              <label htmlFor="email">
                Email:{" "}
                {user?.email ? (
                  <span>{user.email}</span>
                ) : (
                  <input type="text" name="email" id="email" />
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
                <input type="checkbox" name="privacy" id="privacy" />
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
                />
              </label>
              <label>
                Influencer{" "}
                <input
                  onChange={(e) => updateDetails(e)}
                  type="radio"
                  value="influencer"
                  name="type"
                />
              </label>
            </fieldset>
            <fieldset
              style={{
                display: brandDetailsShow ? "grid" : "none",
              }}
            >
              <legend>Brand Details</legend>
              <label htmlFor="businessName">
                Business Name
                <input type="text" name="businessName" id="businessName" />
              </label>
              <label htmlFor="instaHandle">
                Instagram Name
                <input type="text" name="instaHandle" id="instaHandle" />
              </label>
              <label htmlFor="description">
                Decription
                <textarea
                  rows="10"
                  cols="30"
                  name="description"
                  id="description"
                />
              </label>
              <label htmlFor="website">
                Website <input type="text" name="website" id="website" />
              </label>
              <label htmlFor="businessLogo">Business Logo</label>
              <input
                type="file"
                id="businessLogo"
                name="businessLogo"
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
            <fieldset
              style={{
                display: influencerDetailsShow ? "grid" : "none",
              }}
            >
              <legend>Influencer Details</legend>
              <label htmlFor="influencerInstaHandle">
                Instagram Name
                <input
                  type="text"
                  name="influencerInstaHandle"
                  id="influencerInstaHandle"
                />
              </label>
              <label htmlFor="influencerWebsite">
                Website
                <input
                  type="text"
                  name="influencerWebsite"
                  id="influencerWebsite"
                />
              </label>
              <label htmlFor="influencerBio">
                Bio
                <textarea
                  rows="10"
                  cols="30"
                  name="influencerBio"
                  id="influencerBio"
                />
              </label>
              <fieldset>
                <legend>Audience</legend>
                <label htmlFor="age13To17">
                  13 - 17
                  <input
                    placeholder="%"
                    type="text"
                    name="age13To17"
                    id="age13To17"
                  />
                </label>
                <label htmlFor="age18To24">
                  18 - 23
                  <input
                    placeholder="%"
                    type="text"
                    name="age18To24"
                    id="age18To24"
                  />
                </label>
                <label htmlFor="age25To34">
                  25 - 34
                  <input
                    placeholder="%"
                    type="text"
                    name="age25To34"
                    id="age25To34"
                  />
                </label>
                <label htmlFor="age35To44">
                  35 - 44
                  <input
                    placeholder="%"
                    type="text"
                    name="age35To44"
                    id="age35To44"
                  />
                </label>
                <label htmlFor="age45To54">
                  45 - 54
                  <input
                    placeholder="%"
                    type="text"
                    name="age45To54"
                    id="age45To54"
                  />
                </label>
                <label htmlFor="age55To64">
                  55 - 64
                  <input
                    placeholder="%"
                    type="text"
                    name="age55To64"
                    id="age55To64"
                  />
                </label>
                <label htmlFor="age65Plus">
                  65+
                  <input
                    placeholder="%"
                    type="text"
                    name="age65Plus"
                    id="age65Plus"
                  />
                </label>
                <label htmlFor="femalePercentage">
                  Female percentage
                  <input placeholder="%" type="input" name="femalePercentage" />
                </label>
                <label htmlFor="malePercentage">
                  Male percentage
                  <input placeholder="%" type="input" name="malePercentage" />
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
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
    // <div>
    //   Onboarding{" "}
    //   <div>
    //     {!loading ? (
    //       <button
    //         onClick={() => {
    //           setLoading(true);
    //           onboard();
    //         }}
    //       >
    //         on board this user
    //       </button>
    //     ) : (
    //       <div>updating user please wait...</div>
    //     )}
    //   </div>
    // </div>
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

  function post(obj) {
    obj.businessLogo = imageSrc;
    fetch(`http://localhost:3001/${obj.type}/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
      },
      body: JSON.stringify(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};
