import { getToken } from "../context/UserContext";
import { campaigns, image } from "./fake-api";

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

async function onboarding(payloadObject) {
  const token = await getToken();
  return await fetch(`${remote}/${payloadObject.type}s/me`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(payloadObject),
  });
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
  if (localStorage.getItem("offline")) {
    return campaigns;
  } else {
    const token = await getToken();
    const data = await fetch(`${remote}/brands/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const json = await data.json();
    return json;
  }
}

export async function getCampaigns() {
  if (localStorage.getItem("offline")) {
    return campaigns;
  } else {
    const token = await getToken();
    const data = await fetch(`${remote}/brands/me/campaigns`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (data.status !== 200) {
      throw Error(await data.text());
    }

    const json = await data.json();
    return json;
  }
}

export async function newCampaignChain(data) {
  if (localStorage.getItem("offline")) {
    data.id = self.crypto.randomUUID();
    return campaigns.push(data);
  } else {
    const { productImage1, productImage2, productImage3, ...without } = data;
    const productImages = [productImage1, productImage2, productImage3];
    const payload = JSON.stringify(without);
    const token = await getToken();
    //brands/me/campaigns
    const response = await fetch(`${remote}/brands/me/campaigns`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: payload,
    });

    if (response.status === 201) {
      const json = await response.json();
      let i = 1;
      await Promise.all(
        productImages.map(async (img) => {
          await productImage(img, json.id, token, "product-image" + i++);
        })
      );

      return json;
    } else {
      throw Error(await response.text());
    }
  }
}

export async function productImage(img, id, token, ref) {
  const response = await fetch(`${remote}/brands/me/campaigns/${id}/${ref}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ imageBytes: img.split(",")[1] }),
  });

  console.log(
    "product image " + ref + " for campaign id" + id,
    response.statusText
  );
}

export async function getCampaign(campaignId) {
  if (localStorage.getItem("offline")) {
    const result = campaigns.find((campaign) => campaignId === campaign.id);
    result.productImage1 = image.bytes;
    result.productImage2 = image.bytes;
    result.productImage3 = image.bytes;
    result.status = "DRAFT";
    return result;
  } else {
    const token = await getToken();
    const response = await fetch(`${remote}/campaigns/${campaignId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return await response.json();
  }
}

export function getAvailableActionsFor(status) {
  if (status === undefined) return [];

  const actions = [
    {
      status: "DRAFT",
      actions: [
        {
          label: "Edit",
          color: "secondary",
          variant: "contained",
        },
        { label: "Launch", color: "primary", variant: "contained" },
        { label: "Delete", color: "red", variant: "outlined" },
      ],
    },
    {
      status: "ACTIVE",
      actions: [
        { label: "Edit", color: "secondary", variant: "contained" },
        { label: "Close", color: "black", variant: "contained" },
      ],
    },
    {
      status: "CLOSED",
      actions: [{ label: "Delete", color: "red", variant: "outlined" }],
    },
  ];
  const response = actions.find((i) => {
    return i.status === status;
  });
  return response.actions;
}
