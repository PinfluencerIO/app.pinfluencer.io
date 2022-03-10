import { OnboardingFrame } from "../OnboardingFrame/OnboardingFrame";
import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";

export const AboutYou = ({ data, onChangeField, onNextClick }) => {
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
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too short [2-80]")
        .max(80, "Too long [2-80]")
        .required("Required"),
      lastName: Yup.string()
        .min(2, "Too short [2-80]")
        .max(80, "Too long [2-80]")
        .required("Required"),
      email: Yup.string()
        .email("Correctly formated email address")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log("onSubmit in formik ");
      onNextClick();
    },
  });
  return (
    <OnboardingFrame
      title="About You"
      description="Please provide some basic information about yourself."
      inputs={
        <form
          name="form"
          id="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            onChange={(e) => {
              handleChange(e);
              onChangeField(e);
            }}
            onBlur={handleBlur}
            name="firstName"
            label="First Name"
            required
            value={data.firstName}
            margin="normal"
          />
          {touched.firstName && errors.firstName ? (
            <div className="formikError">{errors.firstName}</div>
          ) : null}

          <TextField
            onChange={(e) => {
              handleChange(e);
              onChangeField(e);
            }}
            onBlur={handleBlur}
            name="lastName"
            label="Last Name"
            required
            value={data.lastName}
            margin="normal"
          />
          {touched.lastName && errors.lastName ? (
            <div className="formikError">{errors.lastName}</div>
          ) : null}

          <TextField
            onChange={(e) => {
              handleChange(e);
              onChangeField(e);
            }}
            onBlur={handleBlur}
            name="email"
            label="Email"
            required
            type="email"
            value={data.email}
            margin="normal"
          />
          {touched.email && errors.email ? (
            <div className="formikError">{errors.email}</div>
          ) : null}
        </form>
      }
      onNextClick={onNextClick}
      disabledNext={!isValid}
    />
  );

  function onSubmit() {
    return (e) => {
      console.log("submit");
      e.preventDefault();
      onNextClick();
    };
  }
};
