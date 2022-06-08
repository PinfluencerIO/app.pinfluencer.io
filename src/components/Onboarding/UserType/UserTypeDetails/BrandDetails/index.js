import "./onboardingBrandDetails.css";
import { OnboardingFrame } from "../../../OnboardingFrame/OnboardingFrame";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import React from "react";

export const BrandDetails = ({
  data,
  onChangeField,
  onNextClick,
  onPreviousClick,
}) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched, isValid } =
    useFormik({
      initialValues: {
        brandName: data.brandName,
        instaHandle: data.instaHandle,
        brandDescription: data.brandDescription,
        website: data.website,
      },
      validationSchema: Yup.object({
        brandName: Yup.string()
          .min(2, "Too short [2-120]")
          .max(120, "Too long [2-120]")
          .required("Required"),
        instaHandle: Yup.string()
          .min(2, "Too short [2-80]")
          .max(80, "Too long [2-80]")
          .required("Required"),
        brandDescription: Yup.string()
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
      title="Brand Details"
      description="Form Description goes here. Tell user why we need this information, etc..."
      onNextClick={onNextClick}
      onPreviousClick={onPreviousClick}
      disabledNext={!isValid}
      inputs={
        <>
          <form
            name="form"
            id="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              autoFocus
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              name="brandName"
              label="Brand Name"
              value={data.brandName}
              margin="normal"
            />
            {touched.brandName && errors.brandName ? (
              <div className="formikError">{errors.brandName}</div>
            ) : null}

            <TextField
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              name="instaHandle"
              label="InstaHandle"
              value={data.instaHandle}
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
              label="Description"
              multiline
              rows={4}
              placeholder="Describe your business"
              name="brandDescription"
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              margin="normal"
              value={data.brandDescription}
            />
            {touched.businessDescription && errors.brandDescription ? (
              <div className="formikError">{errors.brandDescription}</div>
            ) : null}

            <TextField
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              name="website"
              label="Website"
              value={data.website}
              margin="normal"
            />
            {touched.website && errors.website ? (
              <div className="formikError">{errors.website}</div>
            ) : null}
          </form>
        </>
      }
    />
  );
};
