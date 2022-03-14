import "./onboardingInfluencerDetails.css";
import { OnboardingFrame } from "../../../OnboardingFrame/OnboardingFrame";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";

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
    }),
    onSubmit: (values) => {
      console.log("onSubmit in formik ");
      onNextClick();
    },
  });
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
            <h3>Influencer</h3>
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
          <Box sx={{ width: "100%", border: "1px solid", mb: 5 }}>
            <h3>Audience</h3>
          </Box>
        </form>
      }
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      disabledNext={!isValid}
    />
  );
};
