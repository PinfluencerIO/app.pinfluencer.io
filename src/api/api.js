import { getToken } from "../context/UserContext";

const remote = "https://3dgldh8a18.execute-api.eu-west-2.amazonaws.com";

export async function onboardingChain(data) {
  // remove opposite type from object
  const ofType = omit(data, data.type === "brand" ? "influencer" : "brand");

  // copy nested object type keys to root
  const withoutNest = { ...ofType[data.type], ...ofType };

  // remove nested key now its keys are at root level
  delete withoutNest[data.type];

  if (data.type === "brand") {
    // copy out brand logo as it isn't sent with main brand payload
    const logoSrc = withoutNest["brandLogo"];
    delete withoutNest["brandLogo"];

    // copy out brand header as it isn't sent with main brand payload
    const headerSrc = withoutNest["brandHeader"];
    delete withoutNest["brandHeader"];

    const response = await onboarding(withoutNest);
    if (response.status === 500) {
      const text = await response.text();

      throw Error(text);
    }
    const newBrand = await response.json();
    if (logoSrc) await brandLogo({ imageBytes: logoSrc.split(",")[1] });
    if (headerSrc) await brandHeader({ imageBytes: headerSrc.split(",")[1] });

    return newBrand;
  } else {
    const response = await onboarding(withoutNest);
    return await response.json();
  }
}

function omit(obj, omitKey) {
  return Object.keys(obj).reduce((result, key) => {
    if (key !== omitKey) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

function onboarding(payloadObject) {
  return getToken().then((token) =>
    fetch(`${remote}/${payloadObject.type}s/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payloadObject),
    })
  );
}

export async function brandLogo(payload) {
  return getToken().then((token) =>
    fetch(`${remote}/brands/me/logo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    })
  );
}

export async function brandHeader(payload) {
  return getToken().then((token) =>
    fetch(`${remote}/brands/me/header-image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(payload),
    })
  );
}

export async function getBrand() {
  const token = await getToken();
  const data = await fetch(`${remote}/brands/me`, {
    method: "GET",
    headers: {
      "Content-Type": "applicatin/json",
      Authorization: "Bearer " + token,
    },
  });

  const json = await data.json();
  return json;
}

export async function getCampaigns() {
  const token = await getToken();
  const data = await fetch(`${remote}/brands/me/campaigns`, {
    method: "GET",
    headers: {
      "Content-Type": "applicatin/json",
      Authorization: "Bearer " + token,
    },
  });

  const json = await data.json();
  return json;
}
