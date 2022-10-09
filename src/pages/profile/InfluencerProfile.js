import React from "react";
import { Categories } from "../../components/displayTypes/Categories";
import { Image } from "../../components/displayTypes/Image";
import { InfluencerDetails } from "../../components/displayTypes/InfluencerDetails";
import { Values } from "../../components/displayTypes/Values";
import { YourDetails } from "../../components/displayTypes/YourDetails";
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
        <YourDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Audience Gender Details">
        <YourDetails data={data} view />
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
