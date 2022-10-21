import React from "react";
import { audienceAges, audienceGenders } from "../../api/data";
import { AudiencePercentages } from "../../components/displayTypes/AudiencePercentages";
import { Image } from "../../components/displayTypes/Image";
import { InfluencerDetails } from "../../components/displayTypes/InfluencerDetails";
import { YourDetails } from "../../components/displayTypes/YourDetails";
import { Categories } from "../../presentation/categories/Categories";
import { Values } from "../../presentation/values/Values";
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

      <ProfileCard title="Images">
        <Image data={data} view id="image" />
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
