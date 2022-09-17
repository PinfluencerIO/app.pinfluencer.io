import { Stack, TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { ImageUpload } from "../../../components/ImageUpload";

export const ProductFrame = ({ data, handleChange, tooLargeAlert }) => {
  return (
    <Fragment>
      <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
        <Typography variant="h4">Product Details</Typography>
        <Typography variant="body1">
          Describe the product you want to market
        </Typography>
        <TextField
          required
          sx={{}}
          id="productTitle"
          name="productTitle"
          value={data.productTitle}
          label="Product Title"
          onChange={handleChange}
        />
        <TextField
          required
          multiline
          rows={8}
          sx={{}}
          id="productDescription"
          name="productDescription"
          value={data.productDescription}
          label="Product Description"
          onChange={handleChange}
        />
        <ImageUpload
          data={data}
          elementId={"productImage1"}
          label={"Product Image"}
          sizeLabel={"Best 300 (w) x 300 (h) pixels"}
          tooLargeAlert={tooLargeAlert}
        />
      </Stack>
    </Fragment>
  );
};
