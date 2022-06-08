import { isLocalhost } from "../utils/isLocal";

const baseURL = isLocalhost
  ? "http://localhost:3004"
  : "https://api.pinfluencer.io";

export async function createBrand(token, data) {
  await fetch(`${baseURL}/brands/me`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Not a good response");
      }
      return response.json();
    })
    .then((data) => {
      console.log("response from POST /brands/me", { data });
      return data;
    })
    .catch((err) => {
      throw err;
    });
}
