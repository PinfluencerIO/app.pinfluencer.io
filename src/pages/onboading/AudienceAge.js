import React from "react";
import { AudiencePercentages } from "../../components/displayTypes/AudiencePercentages";

export const AudienceAge = ({ data, handleChange, collection }) => {
  return (
    <AudiencePercentages
      data={data}
      handleChange={handleChange}
      collection={collection}
    />
  );
};
