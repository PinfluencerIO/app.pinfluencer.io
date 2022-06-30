import { Box, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { ImageUpload } from "../../components/ImageUpload";

export const ProductFrame = ({ data, handleChange }) => {
  return (
    <Fragment>
      <Box sx={{ py: 2, marginBottom: "-30px" }}>
        <h3>Product Details</h3>
        <p>Describe the product you want to market</p>
      </Box>
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
      <Box display="flex" justifyContent={"space-evenly"}>
        <ImageUpload
          data={data}
          elementId={"productImage1"}
          label={"Product Image 1"}
          sizeLabel={"300 (w) x 300 (h) pixels"}
        />
        <ImageUpload
          data={data}
          elementId={"productImage2"}
          label={"Product Image 2"}
          sizeLabel={"300 (w) x 300 (h) pixels"}
        />
        <ImageUpload
          data={data}
          elementId={"productImage3"}
          label={"Product Image 3"}
          sizeLabel={"300 (w) x 300 (h) pixels"}
        />
      </Box>
    </Fragment>
  );
};
