import { BrandDescription } from "../../components/displayTypes/BrandDescription";

import { audienceAges, audienceGenders } from "../../api/data";
import { AudiencePercentages } from "../../components/displayTypes/AudiencePercentages";
import { BrandDetails } from "../../components/displayTypes/BrandDetails";
import { BrandHeader } from "../../components/displayTypes/BrandHeader";
import { Categories } from "../../components/displayTypes/Categories";
import { Image } from "../../components/displayTypes/Image";
import { InfluencerDetails } from "../../components/displayTypes/InfluencerDetails";
import { ProfilePicture } from "../../components/displayTypes/ProfilePicture";
import { Values } from "../../components/displayTypes/Values";
import { YourDetails } from "../../components/displayTypes/YourDetails";
import { InfluencerBio } from "./InfluencerBio";

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
    child: <Image data={data} handleChange={handleDataChange} />,
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
    label: "Audience Age",
    child: (
      <AudiencePercentages
        data={data}
        handleChange={handleDataChange}
        collection={audienceAges}
      />
    ),
  },
  {
    label: "AudienceGender",
    child: (
      <AudiencePercentages
        data={data}
        handleChange={handleDataChange}
        collection={audienceGenders}
      />
    ),
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

export const cleanDataForType = (data, type) => {
  if (type === "brand") {
    delete data.bio;
    delete data.address;
    delete data.audienceAge;
    delete data.audienceGender;
    delete data.image;
  } else {
    delete data.brandName;
    delete data.brandDescription;
    delete data.brandLogo;
    delete data.brandHeader;
  }
};
