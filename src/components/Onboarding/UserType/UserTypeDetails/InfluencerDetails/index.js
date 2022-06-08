import "./onboardingInfluencerDetails.css";
import { OnboardingFrame } from "../../../OnboardingFrame/OnboardingFrame";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

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
      age13To17: data.age13To17,
      age18To24: data.age18To24,
      age25To34: data.age25To34,
      age35To44: data.age35To44,
      age45To54: data.age45To54,
      age55To64: data.age55To64,
      age65Plus: data.age65Plus,
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
      age13To17: Yup.number().min(0).max(100).required(),
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
                    {
                      label: "13-17",
                      name: "age13To17",
                      value: data.age13To17,
                    },
                    {
                      label: "18-24",
                      name: "age18To24",
                      value: data.age18To24,
                    },
                    {
                      label: "25-34",
                      name: "age25To34",
                      value: data.age25To34,
                    },
                    {
                      label: "35-44",
                      name: "age35To44",
                      value: data.age35To44,
                    },
                    {
                      label: "45-54",
                      name: "age45To54",
                      value: data.age45To54,
                    },
                    {
                      label: "55-64",
                      name: "age55To64",
                      value: data.age55To64,
                    },
                    { label: "65+", name: "age65Plus", value: data.age65Plus },
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
