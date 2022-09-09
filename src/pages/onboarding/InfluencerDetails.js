import { Box, Divider, Grid, Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { AudienceAgePercentages } from "../../components/AudienceAgePercentages";
import { AudienceGenderPercentages } from "../../components/AudienceGenderPercentages";

export const InfluenerDetails = ({ data, handleChange }) => {
  const [bioFocus, setBioFocus] = useState(false);
  const onBioFocus = () => setBioFocus(true);
  const onBioBlur = () => setBioFocus(false);
  const [addressFocus, setAddressFocus] = useState(false);
  const onAddressFocus = () => setAddressFocus(true);
  const onAddressBlur = () => setAddressFocus(false);

  /*
bio
audienceA13To17Split: 0,
audienceA18To24Split: 0,
audienceA25To34Split: 0,
audienceA35To44Split: 0,
audienceA45To54Split: 0,
audienceA55To64Split: 0,
audienceA65PlusSplit: 0,
audienceFemaleSplit: 0,
audienceMaleSplit: 0,
*/

  return (
    <React.Fragment>
      <Stack spacing={1} display={{ md: "column" }}>
        <h3>Influencer Details</h3>
        <p>
          Give details of your creators account, so that brands can understand
          who you are.
        </p>
      </Stack>
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
          rows={8}
          onFocus={onBioFocus}
          onBlur={onBioBlur}
          fullWidth="true"
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
          rows={8}
          onFocus={onAddressFocus}
          onBlur={onAddressBlur}
          fullWidth="true"
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
      <Divider />
      <h3>Audience Details</h3>
      <Grid container>
        <Grid item sm={6}>
          <Box>
            <h4>Audience age percentages</h4>
            <AudienceAgePercentages data={data} handleChange={handleChange} />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box>
            <h4>Audience gender percentages</h4>
            <AudienceGenderPercentages
              data={data}
              handleChange={handleChange}
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
