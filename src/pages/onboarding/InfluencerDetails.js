import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AudienceDetails } from "../../components/AudienceDetails";

export const InfluenerDetails = ({ data, handleChange }) => {
  const [bioFocus, setBioFocus] = useState(false);
  const onBioFocus = () => setBioFocus(true);
  const onBioBlur = () => setBioFocus(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const onAddressFocus = () => setAddressFocus(true);
  const onAddressBlur = () => setAddressFocus(false);

  return (
    <Stack spacing={3} p={{ xs: 2, sm: 5, md: 5 }}>
      <Typography variant="h4">Influencer Details</Typography>
      <Typography variant="p">
        Give details of your creators account, so that brands can understand who
        you are.
      </Typography>

      <Stack spacing={2} direction={{ xs: "column", sm: "column", md: "row" }}>
        <TextField
          sx={{ "& label": { whiteSpace: "pre-wrap" } }}
          required
          id="influencer.bio"
          label={
            bioFocus
              ? "Bio"
              : data.influencer.bio === ""
              ? "Bio: Describe what type of creator you are"
              : "Bio"
          }
          name="influencer.bio"
          variant="outlined"
          autoComplete="false"
          value={data.influencer.bio}
          onChange={(event) => handleChange(event)}
          multiline
          rows={6}
          onFocus={onBioFocus}
          onBlur={onBioBlur}
          fullWidth={true}
        />
        <TextField
          sx={{ "& label": { whiteSpace: "pre-wrap" } }}
          required
          id="influencer.address"
          label={
            addressFocus
              ? "Postal Address"
              : data.influencer.address === ""
              ? "Postal Address: Where campiagn product items will be delivered to"
              : "Postal Address"
          }
          name="influencer.address"
          variant="outlined"
          autoComplete="false"
          value={data.influencer.address}
          onChange={(event) => handleChange(event)}
          multiline
          rows={6}
          onFocus={onAddressFocus}
          onBlur={onAddressBlur}
        />
      </Stack>
      <TextField
        id="instahandle"
        label="Instagram Name"
        name="instaHandle"
        variant="outlined"
        autoComplete="false"
        value={data.instaHandle}
        onChange={(event) => handleChange(event)}
      />
      <TextField
        id="website"
        label="Website"
        name="website"
        variant="outlined"
        autoComplete="false"
        value={data.website}
        onChange={(event) => handleChange(event)}
      />
      <AudienceDetails data={data} handleChange={handleChange} />
    </Stack>
  );
};
