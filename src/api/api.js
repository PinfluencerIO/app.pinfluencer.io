import { isLocalhost } from "../aws/aws";
import { getToken, lastAuth } from "../context/UserContext";

const remote = "https://3dgldh8a18.execute-api.eu-west-2.amazonaws.com";
const local = "http://localhost:3001";

export function onboarding(payloadObject) {
  let path;
  if (isLocalhost) {
    path = `${payloadObject.type}s`;
    payloadObject.id = lastAuth();
  } else {
    path = `${payloadObject.type}s/me`;
  }
  return fetch(`${isLocalhost ? local : remote}/${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(payloadObject),
  });
}

export function brandLogo(id, payload) {
  let path;
  if (isLocalhost) {
    path = `${local}/brands/${id}`;
  } else {
    path = `${remote}/brands/me/logo`;
  }

  return fetch(`${path}`, {
    method: isLocalhost ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(payload),
  });
}

export function newCampaing(obj) {
  return fetch(`${isLocalhost ? local : remote}/campaigns`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(obj),
  });
}
