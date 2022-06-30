import { Box, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { CATEGORIES, VALUES } from "../../api/data";
import { ChipSelectInput } from "../../components/ChipSelectInput";

export const CampaignFrame = ({ data, handleChange }) => {
  return (
    <Fragment>
      <Box sx={{ py: 2, marginBottom: "-30px" }}>
        <h3>Campaign Details</h3>
      </Box>
      <TextField
        required
        sx={{}}
        id="campaignTitle"
        name="campaignTitle"
        value={data.campaignTitle}
        label="Campaign Title"
        onChange={handleChange}
      />
      <TextField
        required
        multiline
        rows={8}
        sx={{}}
        id="campaignDescription"
        name="campaignDescription"
        value={data.campaignDescription}
        label="Campaign Description"
        onChange={handleChange}
      />
      <ChipSelectInput
        data={data}
        handleChange={handleChange}
        values={CATEGORIES}
        id="campaignCategories"
        label="Categories *"
      />
      <ChipSelectInput
        data={data}
        handleChange={handleChange}
        values={VALUES}
        id="campaignValues"
        label="Values *"
      />

      <Box display="flex" flexDirection={{ sm: "column", md: "row" }}>
        <TextField
          sx={{ flexGrow: 1, mr: { sm: 0, md: 5 }, mb: { sm: 2, md: 0 } }}
          id="productLink"
          name="productLink"
          value={data.productLink}
          label="Product Link"
          onChange={handleChange}
        />
        <TextField
          sx={{ flexGrow: 1 }}
          id="discountCode"
          name="discountCode"
          value={data.discountCode}
          label="DiscountCode"
          onChange={handleChange}
        />
      </Box>
      <TextField
        required
        sx={{}}
        id="hashtag"
        name="hashtag"
        value={data.hashtag}
        label="hashtag"
        onChange={handleChange}
      />
    </Fragment>
  );
};
