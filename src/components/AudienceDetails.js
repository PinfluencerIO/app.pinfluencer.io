import { Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { AudiencePercentages } from "./AudiencePercentages";

export const AudienceDetails = ({ data, handleChange }) => {
  const audienceAges = [
    {
      id: "influencer.audienceAge13To17Split",
      label: "13 to 17",
    },
    {
      id: "influencer.audienceAge18To24Split",
      label: "18 to 24",
    },
    {
      id: "influencer.audienceAge25To34Split",
      label: "25 to 34",
    },
    {
      id: "influencer.audienceAge35To44Split",
      label: "35 to 44",
    },
    {
      id: "influencer.audienceAge45To54Split",
      label: "45 to 55",
    },
    {
      id: "influencer.audienceAge55To64Split",
      label: "55 to 64",
    },
    {
      id: "influencer.audienceAge65PlusSplit",
      label: "64+",
    },
  ];
  const audienceGenders = [
    {
      id: "influencer.audienceFemaleSplit",
      label: "Female",
    },

    {
      id: "influencer.audienceMaleSplit",
      label: "Male",
    },
  ];
  return (
    <Fragment>
      <Typography variant="h4">Audience Details</Typography>
      <Grid container>
        <AudiencePercentages
          heading="Audience age percentages"
          collection={audienceAges}
          data={data}
          handleChange={handleChange}
        />
        <AudiencePercentages
          heading="Audience gender percentages"
          collection={audienceGenders}
          data={data}
          handleChange={handleChange}
        />
      </Grid>
    </Fragment>
  );
};
