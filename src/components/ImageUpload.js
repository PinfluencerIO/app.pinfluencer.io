import { IconButton, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
export const ImageUpload = ({
  data,
  elementId,
  label,
  sizeLabel,
  tooLargeAlert,
}) => {
  const [imageSrc, setImageSrc] = useState(get(data, elementId));

  return (
    <Fragment>
      <Stack>
        <IconButton
          onClick={() => document.getElementById(elementId).click()}
          aria-label="upload"
          sx={{
            flexGrow: 1,
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

        <IconButton aria-label="delete image" color="red">
          <HighlightOffIcon
            onClick={() => {
              document.getElementById(elementId).value = null;
              setImageSrc(null);
            }}
            sx={{
              visibility:
                imageSrc && !imageSrc.includes("default_product_image")
                  ? "visible"
                  : "hidden",
            }}
          />
        </IconButton>
        <input
          type="file"
          style={{ margin: "-20px 0", visibility: "hidden" }}
          name={elementId}
          id={elementId}
          onChange={() => previewImage(elementId, setImageSrc, tooLargeAlert)}
        ></input>
      </Stack>
    </Fragment>
  );
  function previewImage(elementId, updateStateFunction, tooLargeAlert) {
    const file = document.getElementById(elementId).files[0];
    if (file?.size > 2097152) {
      tooLargeAlert();
      document.getElementById(elementId).value = null;
      return;
    }
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
