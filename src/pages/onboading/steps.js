import { AudienceAge } from "./AudienceAge";
import { AudienceGender } from "./AudienceGender";
import { BrandDescription } from "./BrandDescription";
import { BrandDetails } from "./BrandDetails";
import { BrandHeader } from "./BrandHeader";
import { BrandLogo } from "./BrandLogo";
import { Categories } from "./Categories";
import { InfluencerBio } from "./InfluencerBio";
import { InfluencerDetails } from "./InfluencerDetails";
import { ProfilePicture } from "./ProfilePicture";
import { Values } from "./Values";
import { YourDetails } from "./YourDetails";

export const brandSteps = (data, handleDataChange, handleListChange) => [
  {
    label: "Name and Email",
    child: <YourDetails data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Brand Details",
    child: <BrandDetails data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Brand Description",
    child: <BrandDescription data={data} handleChange={handleDataChange} />,
  },
  {
    label: "BrandLogo",
    child: <BrandLogo data={data} handleChange={handleDataChange} />,
  },
  {
    label: "BrandHeader",
    child: <BrandHeader data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Values",
    child: <Values data={data} handleChange={handleListChange} />,
  },
  {
    label: "Categories",
    child: <Categories data={data} handleChange={handleListChange} />,
  },
];
export const influencerSteps = (data, handleDataChange, handleListChange) => [
  {
    label: "NameEmail",
    child: <YourDetails data={data} handleChange={handleDataChange} />,
  },
  {
    label: "InfluencerDetails",
    child: <InfluencerDetails data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Bio",
    child: <InfluencerBio data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Picture",
    child: <ProfilePicture data={data} handleChange={handleDataChange} />,
  },
  {
    label: "AudienceAge",
    child: <AudienceAge data={data} handleChange={handleDataChange} />,
  },
  {
    label: "AudienceGender",
    child: <AudienceGender data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Values",
    child: <Values data={data} handleChange={handleListChange} />,
  },
  {
    label: "Categories",
    child: <Categories data={data} handleChange={handleListChange} />,
  },
];

export const cleanDataOf = (type, data) => {
  if (type === "brand") {
    delete data.bio;
    delete data.address;
    delete data.audienceAge;
    delete data.audienceGender;
    delete data.profilePicture;
  } else {
    delete data.brandName;
    delete data.brandDescription;
    delete data.brandLogo;
    delete data.brandHeader;
  }
};
