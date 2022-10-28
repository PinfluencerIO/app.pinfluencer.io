import { actionRequest, remote } from "./api";

export async function brandLogo(imageBytes) {
  const requestAction = await actionRequest("POST", JSON.stringify(imageBytes));
  return await fetch(`${remote}/brands/me/images/logo`, requestAction);
}

export async function brandHeader(imageBytes) {
  const requestAction = await actionRequest("POST", JSON.stringify(imageBytes));
  return await fetch(`${remote}/brands/me/images/header-image`, requestAction);
}

export async function updateBrand(brand) {
  if (brand?.logo.startsWith("data:image")) {
    return await brandLogo({ imageBytes: brand.logo.split(",")[1] });
  }

  if (brand?.headerImage.startsWith("data:image")) {
    return await brandHeader({ imageBytes: brand.headerImage.split(",")[1] });
  }

  const payload = JSON.stringify(brand);
  const requestAction = await actionRequest("PATCH", payload);
  return await fetch(`${remote}/brands/me`, requestAction);
}

export async function getBrand() {
  const requestAction = await actionRequest("GET");
  const response = await fetch(`${remote}/brands/me`, requestAction);
  const json = await response.json();
  return json;
}
