import { Box, TextField } from "@mui/material";
import React, { Fragment } from "react";
import { CATEGORIES, VALUES } from "../../../api/data";
import { ChipSelectInput } from "../../../components/ChipSelectInput";

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
      <TextField
        required
        sx={{}}
        id="campaignHashtag"
        name="campaignHashtag"
        value={data.campaignHashtag}
        label="Hashtag"
        onChange={handleChange}
      />
      <Box display="flex" flexDirection={{ sm: "column", md: "row" }}>
        <TextField
          sx={{ flexGrow: 1, mr: { sm: 0, md: 5 }, mb: { sm: 2, md: 0 } }}
          id="campaignProductLink"
          name="campaignProductLink"
          value={data.campaignProductLink}
          label="Product Link"
          onChange={handleChange}
        />
        <TextField
          sx={{ flexGrow: 1 }}
          id="campaignDiscountCode"
          name="campaignDiscountCode"
          value={data.campaignDiscountCode}
          label="DiscountCode"
          onChange={handleChange}
        />
      </Box>
    </Fragment>
  );
};
