import FileUploadIcon from "@mui/icons-material/FileUpload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
export const ImageUpload = ({
  data,
  elementId,
  label,
  sizeLabel,
  tooLargeAlert,
  handleChange,
  width = 200,
  height = 200,
  margin = "0 auto",
}) => {
  const [imageSrc, setImageSrc] = useState(data[elementId]);
  return (
    <Stack>
      <IconButton
        onClick={() => document.getElementById(elementId).click()}
        aria-label="upload"
        sx={{
          border: "1px solid",
          borderRadius: "5px",
          background: "url(" + imageSrc + ") center center no-repeat",
          backgroundSize: "cover",
          width: { width },
          height: { height },
          margin: { margin },
        }}
      >
        <Stack
          spacing={1}
          sx={{ alignItems: "center", display: imageSrc ? "none" : "block" }}
        >
          <FileUploadIcon sx={{ fontSize: "5rem" }} />
          <Typography component="p">{label}</Typography>
          <Typography component="p">{sizeLabel}</Typography>
        </Stack>
      </IconButton>

      <IconButton
        aria-label="delete image"
        color="error"
        onClick={() => {
          document.getElementById(elementId).value = null;
          handleChange({ target: { name: elementId, value: null } });
          setImageSrc(null);
        }}
      >
        <HighlightOffIcon
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
  );
  function previewImage(elementId, updateStateFunction, tooLargeAlert) {
    const file = document.getElementById(elementId).files[0];
    if (file?.size > 2097152) {
      false && tooLargeAlert();
      document.getElementById(elementId).value = null;
      return;
    }
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        const src = reader.result;
        updateStateFunction(src);
        handleChange({ target: { name: elementId, value: src } });
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
};
