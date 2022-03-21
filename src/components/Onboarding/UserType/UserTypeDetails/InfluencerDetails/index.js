import "./onboardingInfluencerDetails.css";
import { OnboardingFrame } from "../../../OnboardingFrame/OnboardingFrame";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

export const InfluencerDetails = ({
  data,
  onChangeField,
  onNextClick,
  onPreviousClick,
}) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      instaHandle: data.instaHandle,
      bio: data.bio,
      website: data.website,
      age13_17: data.age13_17,
      age18_24: data.age18_24,
      age25_34: data.age25_34,
      age35_44: data.age35_44,
      age45_54: data.age45_54,
      age55_64: data.age55_64,
      age65plus: data.age65plus,
      audienceGenger: data.audienceGenger,
    },
    validationSchema: Yup.object({
      instaHandle: Yup.string()
        .min(2, "Too short [2-80]")
        .max(80, "Too long [2-80]")
        .required("Required"),
      bio: Yup.string()
        .min(5, "Too short [5-500]")
        .max(500, "Too long [5-500]")
        .required("Required"),
      website: Yup.string()
        .url("Eg http://www.bbc.co.uk or https://www.bbc.co.uk ")
        .required("Required"),
      age13_17: Yup.number().min(0).max(100).required(),
    }),
    onSubmit: (values) => {
      console.log("onSubmit in formik ");
      onNextClick();
    },
  });

  function repeat(items) {
    return items.map((i) => {
      return (
        <div className="influencerAudienceOnboardingPercentagesItems">
          <TextField
            type="number"
            step="0.01"
            InputProps={{
              inputProps: { min: 0, max: 100 },
              endAdornment: <InputAdornment>%</InputAdornment>,
            }}
            label={i.label}
            name={i.name}
            onChange={(e) => {
              var value = parseInt(e.target.value, 10);
              if (value > 100) {
                e.target.value = 100;
              } else if (value < 0) {
                e.target.value = 0;
              }
              handleChange(e);
              onChangeField(e);
            }}
            onBlur={handleBlur}
            margin="normal"
            value={i.value}
          />
        </div>
      );
    });
  }

  return (
    <OnboardingFrame
      title="Influencer Details"
      description="Form Description goes here. Tell user why we need this information, etc..."
      inputs={
        <form
          name="form"
          id="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Box
            sx={{
              width: "100%",
              mb: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              autoFocus
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              name="instaHandle"
              label="InstaHandle"
              value={values.instaHandle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">#</InputAdornment>
                ),
              }}
              margin="normal"
            />
            {touched.instaHandle && errors.instaHandle ? (
              <div className="formikError">{errors.instaHandle}</div>
            ) : null}

            <TextField
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              name="website"
              label="Website"
              value={values.influencerWebsite}
              margin="normal"
            />
            {touched.website && errors.website ? (
              <div className="formikError">{errors.website}</div>
            ) : null}

            <TextField
              label="Bio"
              multiline
              rows={4}
              placeholder="Describe yourself"
              name="bio"
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              margin="normal"
              value={values.bio}
            />
            {touched.bio && errors.bio ? (
              <div className="formikError">{errors.bio}</div>
            ) : null}
          </Box>
          <Box
            sx={{
              width: "100%",
              mb: 5,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3>Audience</h3>
            <div className="influencerAudienceOnboarding">
              <div className="influencerAudienceOnboardingLeft">
                <p>Select audience age percentages</p>
                <div className="influencerAudienceOnboardingPercentages">
                  {repeat([
                    { label: "13-17", name: "age13_17", value: data.age13_17 },
                    { label: "18-24", name: "age18_24", value: data.age18_24 },
                    { label: "25-34", name: "age25_34", value: data.age25_34 },
                    { label: "35-44", name: "age35_44", value: data.age35_44 },
                    { label: "45-54", name: "age45_54", value: data.age45_54 },
                    { label: "55-64", name: "age55_64", value: data.age55_64 },
                    { label: "65+", name: "age65plus", value: data.age65plus },
                  ])}
                </div>
              </div>
              <div className="influencerAudienceOnboardingRight">
                <p>Audience gender</p>
                <div className="influencerAudienceOnboardingRightGenderContainer">
                  <RadioGroup
                    name="audienceGenger"
                    row
                    onChange={onChangeField}
                    value={data.audienceGenger}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="50_50"
                      control={<Radio />}
                      label="50/50"
                      labelPlacement="bottom"
                    />
                  </RadioGroup>
                </div>
              </div>
            </div>
          </Box>
        </form>
      }
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      disabledNext={!isValid}
    />
  );
};
