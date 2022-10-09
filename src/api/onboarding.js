import { actionRequest, executeFetch, remote } from "./api";
import { brandHeader, brandLogo } from "./brandApi";

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
    // copy out brand logo as it isn't sent with main brand payload
    const profilePicture = data.profilePicture;
    delete data.profilePicture;

    const response = await onboarding(data, type);

    const newInfluencer = await response.json();

    await onboard();

    if (profilePicture) {
      await profilePicture({ imageBytes: profilePicture.split(",")[1] });
    }

    return newInfluencer;
  }
}

async function onboarding(payload, type) {
  const requestAction = await actionRequest("POST", JSON.stringify(payload));
  return await executeFetch(`${remote}/${type}s/me`, requestAction);
}
