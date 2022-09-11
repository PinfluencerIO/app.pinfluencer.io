import { IconButton, Stack, TextField, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React from "react";
import { useState } from "react";

export const BrandDetails = ({ data, handleChange }) => {
  const [brandLogoSrc, setBrandLogoSrc] = useState(data.brand.brandLogo);
  const [brandHeaderSrc, setBrandHeaderSrc] = useState(data.brand.brandHeader);

  function previewImage(elementId, updateStateFunction) {
    const file = document.getElementById(elementId).files[0];
    const reader = new FileReader();

    reader.addEventListener(
      "load",
      function () {
        const imageSrc = reader.result;
        updateStateFunction(imageSrc);
        const keys = elementId.split(".");
        data[keys[0]][keys[1]] = imageSrc;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return (
    <React.Fragment>
      <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
        <Typography variant="h4">Brand Details</Typography>
        <Typography variant="p">
          Exercitation ex est proident est laborum eiusmod nisi excepteur minim
          cillum velit officia. Qui et ut id minim veniam qui culpa excepteur.
          Id id amet amet Lorem dolore ullamco labore.
        </Typography>

        <Stack spacing={3} direction={{ xs: "column", sm: "row", md: "row" }}>
          <TextField
            required
            id="brand.brandName"
            label="Brand Name"
            name="brand.brandName"
            variant="outlined"
            autoComplete="false"
            value={data.brand.brandName}
            onChange={(event) => handleChange(event)}
            sx={{ width: { sm: "100%", md: "50%" } }}
          />
          <TextField
            id="instahandle"
            label="Instagram Name"
            name="instaHandle"
            variant="outlined"
            autoComplete="false"
            value={data.instaHandle}
            onChange={(event) => handleChange(event)}
            sx={{ width: { sm: "100%", md: "50%" } }}
          />
        </Stack>

        <TextField
          id="website"
          label="Website"
          name="website"
          variant="outlined"
          autoComplete="false"
          value={data.website}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          required
          id="brand.brandDescription"
          label="Brand Description"
          name="brand.brandDescription"
          variant="outlined"
          autoComplete="false"
          value={data.brand.brandDescription}
          onChange={(event) => handleChange(event)}
          multiline
          rows={8}
        />

        <Stack
          spacing={2}
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <IconButton
            onClick={() => document.getElementById("brand.brandLogo").click()}
            aria-label="logo image upload"
            sx={{
              border: "1px solid",
              borderRadius: "5px",
              background: " url(" + brandLogoSrc + ") center center no-repeat",
            }}
          >
            <Stack spacing={1} sx={{ alignItems: "center" }}>
              <FileUploadIcon sx={{ fontSize: "5rem" }} />
              <Typography component="p">Upload Logo</Typography>
              <Typography component="p">300 (w) x 300 (h) pixels</Typography>
            </Stack>
          </IconButton>
          <IconButton
            onClick={() => document.getElementById("brand.brandHeader").click()}
            aria-label="header image upload"
            sx={{
              border: "1px solid",
              borderRadius: "5px",
              flexGrow: "1",
              background:
                " url(" + brandHeaderSrc + ") center center no-repeat",
            }}
          >
            <Stack spacing={1} sx={{ alignItems: "center" }}>
              <FileUploadIcon sx={{ fontSize: "5rem" }} />
              <Typography component="p">Upload Header Image</Typography>
              <Typography component="p">1128 (w) x 191 (h) pixels</Typography>
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
      <input
        type="file"
        style={{ margin: "-20px 0", visibility: "hidden" }}
        name="brand.brandLogo"
        id="brand.brandLogo"
        onChange={() => previewImage("brand.brandLogo", setBrandLogoSrc)}
      ></input>
      <input
        type="file"
        style={{
          margin: "0px 0",
          visibility: "hidden",
        }}
        name="brand.brandHeader"
        id="brand.brandHeader"
        onChange={() => previewImage("brand.brandHeader", setBrandHeaderSrc)}
      ></input>
    </React.Fragment>
  );
};
