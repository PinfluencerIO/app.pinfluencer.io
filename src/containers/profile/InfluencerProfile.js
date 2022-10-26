import React from "react";
import { audienceAges, audienceGenders } from "../../api/data";
import { AudiencePercentages } from "../../presentation/AudiencePercentages";
import { Categories } from "../../presentation/categories/Categories";
import { Image } from "../../presentation/image/Image";
import { InfluencerDetails } from "../../presentation/InfluencerDetails";
import { Values } from "../../presentation/values/Values";
import { YourDetails } from "../../presentation/YourDetails";
import { ProfileCard } from "./ProfileCard";

export const InfluencerProfile = ({ data }) => {
  return (
    <>
      <ProfileCard title="Your Details">
        <YourDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Influencer Details">
        <InfluencerDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Profile Image">
        <Image
          data={data}
          view
          id="image"
          label="Profile Picture"
          width={170}
          height={170}
          sizeLabel="Best 300 (w) x 300 (h) pixels"
        />
      </ProfileCard>

      <ProfileCard title="Audience Age Details">
        <AudiencePercentages data={data} view collection={audienceAges} />
      </ProfileCard>

      <ProfileCard title="Audience Gender Details">
        <AudiencePercentages data={data} view collection={audienceGenders} />
      </ProfileCard>

      <ProfileCard title="Values">
        <Values data={data} view />
      </ProfileCard>

      <ProfileCard title="Categories">
        <Categories data={data} view />
      </ProfileCard>
    </>
  );
};
