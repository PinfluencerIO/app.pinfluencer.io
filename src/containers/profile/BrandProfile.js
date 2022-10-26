import React from "react";
import { BrandDescription } from "../../presentation/BrandDescription";
import { BrandDetails } from "../../presentation/BrandDetails";
import { Categories } from "../../presentation/categories/Categories";
import { Image } from "../../presentation/image/Image";
import { Values } from "../../presentation/values/Values";
import { YourDetails } from "../../presentation/YourDetails";
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
        <Image
          data={data}
          id="logo"
          view
          width={170}
          height={170}
          label="Logo"
          sizeLabel="Best 300 (w) x 300 (h) pixels"
        />
      </ProfileCard>

      <ProfileCard title="Brand Header">
        <Image
          data={data}
          id="headerImage"
          view
          label={"Brand header image"}
          sizeLabel={"1100 (w) x 200 (h) pixels"}
          width={250}
          height={130}
        />
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
