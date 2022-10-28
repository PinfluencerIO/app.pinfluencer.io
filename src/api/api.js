import { getToken } from "../context/UserContext";

export const remote = "https://3dgldh8a18.execute-api.eu-west-2.amazonaws.com";

// standardise token based header
async function authenticatedHeader() {
  const token = await getToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  return headers;
}

// standardised request with optional payload
export async function actionRequest(action, payload) {
  const headers = await authenticatedHeader();
  const request = {
    method: action,
    headers: headers,
  };

  if (payload) {
    request.body = payload;
  }
  return request;
}
