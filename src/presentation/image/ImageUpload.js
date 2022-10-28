import FileUploadIcon from "@mui/icons-material/FileUpload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ImageBox } from "./ImageBox";
export const ImageUpload = ({
  data,
  elementId,
  label,
  sizeLabel,
  tooLargeAlert = "image too large",
  handleChange,
  width,
  height,
  margin,
}) => {
  const [msg, setMsg] = React.useState("");
  const [imageSrc, setImageSrc] = useState(data[elementId]);
  return (
    <Stack>
      <IconButton
        disableRipple={true}
        onClick={() => {
          console.log(document.getElementById(elementId));
          document.getElementById(elementId).click();
        }}
        aria-label="upload"
        sx={{
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <ImageBox
          imageSrc={imageSrc}
          width={width}
          height={height}
          margin={margin}
        >
          <Stack
            spacing={1}
            sx={{ alignItems: "center", display: imageSrc ? "none" : "block" }}
          >
            <FileUploadIcon sx={{ fontSize: "4rem" }} />
            <Typography component="p">{label}</Typography>
            <Typography component="p">{sizeLabel}</Typography>
          </Stack>
        </ImageBox>
      </IconButton>
      <Typography sx={{ margin: "0 auto" }}>{msg}</Typography>

      <IconButton
        disableRipple={true}
        aria-label="delete image"
        color="error"
        onClick={() => {
          console.log("onClick", document.getElementById(elementId).value);
          document.getElementById(elementId).value = null;
          handleChange({ target: { name: elementId, value: null } });
          setImageSrc(null);
        }}
        sx={{
          "&:hover": { backgroundColor: "transparent" },
          visibility:
            imageSrc && !imageSrc.includes("default_product_image")
              ? "visible"
              : "hidden",
        }}
      >
        <HighlightOffIcon />
      </IconButton>
      <input
        type="file"
        style={{ margin: "-20px 0", visibility: "hidden" }}
        name={elementId}
        id={elementId}
        onChange={() =>
          previewImage(elementId, setImageSrc, tooLargeAlert, setMsg)
        }
      ></input>
    </Stack>
  );
  function previewImage(elementId, updateStateFunction, tooLargeAlert, setMsg) {
    console.log(
      "preview onclick",
      elementId,
      updateStateFunction,
      tooLargeAlert
    );
    const file = document.getElementById(elementId).files[0];
    if (file?.size > 2097152) {
      setMsg(tooLargeAlert);
      console.log("Too large");
      document.getElementById(elementId).value = null;
      return;
    } else {
      setMsg(null);
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
