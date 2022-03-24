import "./onboardingBrandDetails.css";
import { OnboardingFrame } from "../../../OnboardingFrame/OnboardingFrame";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputAdornment, TextField } from "@mui/material";

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
        businessName: data.businessName,
        instaHandle: data.instaHandle,
        businessDescription: data.businessDescription,
        businessWebsite: data.businessWebsite,
      },
      validationSchema: Yup.object({
        businessName: Yup.string()
          .min(2, "Too short [2-120]")
          .max(120, "Too long [2-120]")
          .required("Required"),
        instaHandle: Yup.string()
          .min(2, "Too short [2-80]")
          .max(80, "Too long [2-80]")
          .required("Required"),
        businessDescription: Yup.string()
          .min(5, "Too short [5-500]")
          .max(500, "Too long [5-500]")
          .required("Required"),
        businessWebsite: Yup.string()
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
              name="businessName"
              label="Business Name"
              value={data.businessName}
              margin="normal"
            />
            {touched.businessName && errors.businessName ? (
              <div className="formikError">{errors.businessName}</div>
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
              name="businessDescription"
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              margin="normal"
              value={data.businessDescription}
            />
            {touched.businessDescription && errors.businessDescription ? (
              <div className="formikError">{errors.businessDescription}</div>
            ) : null}

            <TextField
              onChange={(e) => {
                handleChange(e);
                onChangeField(e);
              }}
              onBlur={handleBlur}
              name="businessWebsite"
              label="Website"
              value={data.businessWebsite}
              margin="normal"
            />
            {touched.businessWebsite && errors.businessWebsite ? (
              <div className="formikError">{errors.businessWebsite}</div>
            ) : null}
          </form>
        </>
      }
    />
  );
};
