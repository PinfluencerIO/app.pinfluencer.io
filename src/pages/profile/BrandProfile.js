import React from "react";
import { BrandDescription } from "../../components/displayTypes/BrandDescription";
import { BrandDetails } from "../../components/displayTypes/BrandDetails";
import { BrandHeader } from "../../components/displayTypes/BrandHeader";
import { Image } from "../../components/displayTypes/Image";
import { YourDetails } from "../../components/displayTypes/YourDetails";
import { Categories } from "../../presentation/categories/Categories";
import { Values } from "../../presentation/values/Values";
import { ProfileCard } from "./ProfileCard";

export const BrandProfile = ({ data }) => {
  return (
    <>
      <ProfileCard title="Your Details">
        <YourDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Brand Details">
        <BrandDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Brand Description">
        <BrandDescription data={data} view />
      </ProfileCard>

      <ProfileCard title="Brand Logo">
        <Image data={data} id="logo" view />
      </ProfileCard>

      <ProfileCard title="Brand Header">
        <BrandHeader data={data} id="headerImage" view />
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
