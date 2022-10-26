import { BrandDescription } from "../../presentation/BrandDescription";

import { audienceAges, audienceGenders } from "../../api/data";
import { AudiencePercentages } from "../../presentation/AudiencePercentages";
import { BrandDetails } from "../../presentation/BrandDetails";
import { InfluencerDetails } from "../../presentation/InfluencerDetails";
import { YourDetails } from "../../presentation/YourDetails";
import { Categories } from "../../presentation/categories/Categories";
import { Image } from "../../presentation/image/Image";
import { Values } from "../../presentation/values/Values";
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
    label: "Brand Logo",
    child: (
      <Image
        data={data}
        handleChange={handleDataChange}
        id="logo"
        width={170}
        height={170}
        label="Logo"
        sizeLabel="Best 300 (w) x 300 (h) pixels"
      />
    ),
  },
  {
    label: "Brand Header",
    child: (
      <Image
        data={data}
        handleChange={handleDataChange}
        id="headerImage"
        label={"Brand header image"}
        sizeLabel={"1100 (w) x 200 (h) pixels"}
        width={250}
        height={130}
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
export const influencerSteps = (data, handleDataChange, handleListChange) => [
  {
    label: "Name Email",
    child: <YourDetails data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Influencer Details",
    child: <InfluencerDetails data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Bio",
    child: <InfluencerBio data={data} handleChange={handleDataChange} />,
  },
  {
    label: "Picture",
    child: (
      <Image
        data={data}
        handleChange={handleDataChange}
        id="image"
        label="Profile Picture"
        width={170}
        height={170}
        sizeLabel="Best 300 (w) x 300 (h) pixels"
      />
    ),
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
    label: "Audience Gender",
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
