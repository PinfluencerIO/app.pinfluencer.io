import { actionRequest, remote } from "./api";
import { brandHeader, brandLogo } from "./brandApi";
import { profilePicture } from "./influencerApi";

// send type data, then chain images
export async function onboardingChain(data, type, onboard) {
  if (type === "brand") {
    // copy out brand logo as it isn't sent with main brand payload
    const brandLogoImg = data.brandLogo;
    delete data.brandLogo;

    // copy out brand header as it isn't sent with main brand payload
    const brandHeaderImg = data.brandHeader;
    delete data.brandHeader;
    const response = await onboarding(data, type);

    const newBrand = await response.json();

    await onboard();

    if (brandLogoImg) {
      await brandLogo({ imageBytes: brandLogoImg.split(",")[1] });
    }
    if (brandHeaderImg) {
      await brandHeader({ imageBytes: brandHeaderImg.split(",")[1] });
    }

    return newBrand;
  } else {
    console.log("Influencer onboarding ", data, type, onboard);

    // copy out onboarding image; it is handled in a secondary api call
    const image = data.image;
    delete data.image;

    const response = await onboarding(data, type);

    console.log("infl onboarding response ", response);

    if (!response.ok) return response.ok;

    const newInfluencer = await response.json();

    await onboard();

    if (image) {
      await profilePicture({ imageBytes: image.split(",")[1] });
    }

    return newInfluencer;
  }
}

async function onboarding(payload, type) {
  const requestAction = await actionRequest("POST", JSON.stringify(payload));
  const url = `${remote}/${type}s/me`;
  console.log("POST url", url, payload);
  return fetch(`${remote}/${type}s/me`, requestAction);
}
