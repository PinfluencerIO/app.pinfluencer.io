import { BrandDescription } from "../../components/displayTypes/BrandDescription";

import { AudiencePercentages } from "../../components/displayTypes/AudiencePercentages";
import { BrandDetails } from "../../components/displayTypes/BrandDetails";
import { BrandHeader } from "../../components/displayTypes/BrandHeader";
import { Categories } from "../../components/displayTypes/Categories";
import { Image } from "../../components/displayTypes/Image";
import { ProfilePicture } from "../../components/displayTypes/ProfilePicture";
import { Values } from "../../components/displayTypes/Values";
import { YourDetails } from "../../components/displayTypes/YourDetails";
import { InfluencerBio } from "./InfluencerBio";
import { InfluencerDetails } from "./InfluencerDetails";

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

const audienceAges = [
  {
    id: "audienceAge13To17Split",
    label: "13 to 17",
  },
  {
    id: "audienceAge18To24Split",
    label: "18 to 24",
  },
  {
    id: "audienceAge25To34Split",
    label: "25 to 34",
  },
  {
    id: "audienceAge35To44Split",
    label: "35 to 44",
  },
  {
    id: "audienceAge45To54Split",
    label: "45 to 55",
  },
  {
    id: "audienceAge55To64Split",
    label: "55 to 64",
  },
  {
    id: "audienceAge65PlusSplit",
    label: "64+",
  },
];
const audienceGenders = [
  {
    id: "audienceFemaleSplit",
    label: "Female",
  },

  {
    id: "audienceMaleSplit",
    label: "Male",
  },
];
