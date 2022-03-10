import React from "react";
import { BrandDetails } from "./BrandDetails";
import { InfluencerDetails } from "./InfluencerDetails";

export const UserTypeDetails = ({
  data,
  onChangeField,
  onNextClick,
  onPreviousClick,
}) => {
  return (
    <>
      {data.userType.length > 0 && data.userType === "brand" && (
        <BrandDetails
          data={data}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
          onChangeField={onChangeField}
        />
      )}
      {data.userType.length > 0 && data.userType === "influencer" && (
        <InfluencerDetails
          data={data}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
          onChangeField={onChangeField}
        />
      )}
    </>
  );
};
