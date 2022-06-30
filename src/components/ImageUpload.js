import { IconButton, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export const ImageUpload = ({ data, elementId, label, sizeLabel }) => {
  const [imageSrc, setImageSrc] = useState(get(data, elementId));

  return (
    <Fragment>
      <IconButton
        onClick={() => document.getElementById(elementId).click()}
        aria-label="logo image upload"
        sx={{
          border: "1px solid",
          borderRadius: "5px",
          background: " url(" + imageSrc + ") center center no-repeat",
          backgroundSize: "contain",
        }}
      >
        <Stack spacing={1} sx={{ alignItems: "center" }}>
          <FileUploadIcon sx={{ fontSize: "5rem" }} />
          <Typography component="p">{label}</Typography>
          <Typography component="p">{sizeLabel}</Typography>
        </Stack>
      </IconButton>
      <input
        type="file"
        style={{ margin: "-20px 0", visibility: "hidden" }}
        name={elementId}
        id={elementId}
        onChange={() => previewImage(elementId, setImageSrc)}
      ></input>
    </Fragment>
  );
  function previewImage(elementId, updateStateFunction) {
    const file = document.getElementById(elementId).files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        const src = reader.result;
        updateStateFunction(src);
        set(data, elementId, src);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  function get(data, key) {
    return data[key];
  }

  function set(data, key, value) {
    data[key] = value;
  }
};
