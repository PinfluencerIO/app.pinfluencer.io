import { actionRequest, executeFetch, remote } from "./api";

export async function profilePicture(imageBytes) {
  const requestAction = await actionRequest("POST", JSON.stringify(imageBytes));
  return await executeFetch(
    `${remote}/influencer/me/images/image`,
    requestAction
  );
}
