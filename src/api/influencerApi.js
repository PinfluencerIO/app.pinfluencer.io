import { actionRequest, executeFetch, remote } from "./api";

export async function profilePicture(imageBytes) {
  const requestAction = await actionRequest("POST", JSON.stringify(imageBytes));
  return await executeFetch(
    `${remote}/influencers/me/images/image`,
    requestAction
  );
}

export async function getInfluencer() {
  const requestAction = await actionRequest("GET");
  const response = await executeFetch(
    `${remote}/influencers/me`,
    requestAction
  );
  const json = await response.json();
  return json;
}

export async function updateInfluencer(influencer) {
  if (influencer?.image.startsWith("data:image")) {
    return await profilePicture({ imageBytes: influencer.image.split(",")[1] });
  }

  const payload = JSON.stringify(influencer);
  const requestAction = await actionRequest("PATCH", payload);
  return await executeFetch(`${remote}/influencers/me`, requestAction);
}
