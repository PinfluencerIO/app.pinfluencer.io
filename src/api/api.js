import { getToken } from "../context/UserContext";
import { campaigns, image } from "./fake-api";

// const remote = "https://api.pinfluencer.link";
const remote = "https://3dgldh8a18.execute-api.eu-west-2.amazonaws.com";

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
async function actionRequest(action, payload) {
  const headers = await authenticatedHeader();
  const request = {
    method: action,
    headers: headers,
  };

  if (payload) {
    request.body = payload;
  }
  if (action === "PATCH") console.log("PATCH", request);
  return request;
}

// fetch call that only returns ok response, otherwise throws an exception
async function executeFetch(url, action) {
  console.log("Execute", url, action);
  const response = await fetch(url, action);

  if (response.ok) {
    return response;
  }
  throw Error(await response.text());
}

async function onboarding(payloadObject) {
  const payload = JSON.stringify(payloadObject);
  const requestAction = await actionRequest("POST", payload);
  return await executeFetch(
    `${remote}/${payloadObject.type}s/me`,
    requestAction
  );
}

// send type data, then chain images
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

export async function brandLogo(data) {
  const payload = JSON.stringify(data);
  const requestAction = await actionRequest("POST", payload);
  return await executeFetch(`${remote}/brands/me/logo`, requestAction);
}

export async function brandHeader(data) {
  const payload = JSON.stringify(data);
  const requestAction = await actionRequest("POST", payload);
  return await executeFetch(`${remote}/brands/me/header-image`, requestAction);
}

export async function getBrand() {
  if (localStorage.getItem("offline")) {
    return campaigns;
  } else {
    const requestAction = await actionRequest("GET");
    const response = await executeFetch(`${remote}/brands/me`, requestAction);
    const json = await response.json();
    return json;
  }
}

export async function getCollaborations() {
  return [
    {
      id: 1,
      collaborationState: "requested",
      campaignId: 300,
      campaignTitle: "Aliquip laboris",
      productImage: "https://picsum.photos/200",
      influencerId: 600,
      influencerName: "Jessie Boone",
      influencerAddress: null,
      collaborationRequestId: 800,
      collaborationRequestDetails:
        "Exercitation do non duis labore duis excepteur adipisicing nostrud.",
    },
    {
      id: 2,
      collaborationState: "approved",
      campaignId: 302,
      campaignTitle: "Pariatur eu consequat",
      productImage: "https://picsum.photos/200",
      influencerId: 602,
      influencerName: "Frank Allen",
      influencerAddress: null,
      collaborationRequestId: 802,
      collaborationRequestDetails:
        "Ullamco tempor aliquip fugiat culpa fugiat fugiat dolor pariatur incididunt in exercitation tempor esse.",
      notifications: 3,
    },
    {
      id: 3,
      collaborationState: "completed",
      campaignId: 303,
      campaignTitle: "Esse dolor voluptate elit aliqua",
      influencerId: 603,
      influencerName: "Hettie Bryant",
      influencerAddress:
        "Hettie Bryant, 100 Gilbon Ave, St. Pierre & Miquelon, chulmleigh, Devon, EX187BJ",
      collaborationRequestId: 803,
      collaborationRequestDetails: "Reprehenderit magna cupidatat quis nulla.",
      contentImage: "https://picsum.photos/200",
      productImage: "https://picsum.photos/200",
      notifications: 1,
    },
    {
      id: 5,
      collaborationState: "approved",
      campaignId: 305,
      campaignTitle: "Lamp perfectly source rather distant stranger",
      productImage: "https://picsum.photos/200",
      influencerId: 605,
      influencerName: "Terry Ferguson",
      influencerAddress: "70 How Road, Sudanvill, Oxford, OX29 9ER",
      collaborationRequestId: 805,
      collaborationRequestDetails:
        "With moon cap usual die camp topic chicken ",
      contentImage: "https://picsum.photos/200",
      notifications: 0,
    },
    {
      id: 4,
      collaborationState: "rejected",
      campaignId: 304,
      campaignTitle: "Duis duis qui quis elit amet",
      productImage: "https://picsum.photos/200",
      influencerId: 604,
      influencerName: "Phoebe Conner",
      influencerAddress: null,
      collaborationRequestId: 804,
      collaborationRequestDetails:
        "Duis labore incididunt adipisicing amet occaecat mollit labore dolor enim.",
    },
  ];
}

export async function getCampaigns() {
  if (localStorage.getItem("offline")) {
    return campaigns;
  } else {
    const requestAction = await actionRequest("GET");
    const response = await executeFetch(
      `${remote}/brands/me/campaigns`,
      requestAction
    );

    const json = await response.json();
    return json;
  }
}

//TODO too much copy/paste from newcampaign
export async function updateCampaign(data) {
  if (localStorage.getItem("offline")) {
    const camapign = campaigns.find((c) => c.id === data.id);
    Object.assign(camapign, data);
    return data;
  } else {
    const { productImage1, productImage2, productImage3, ...without } = data;
    const productImages = [productImage1, productImage2, productImage3];
    console.log(productImages);
    // const updateImages = productImages.filter(
    //   (img) => !img.startsWith("https")
    // );
    // data.productImageUpdate = updateImages;
    const payload = JSON.stringify(without);
    const requestAction = await actionRequest("PUT", payload);
    const response = await executeFetch(
      `${remote}/brands/me/campaigns/${data.id}`,
      requestAction
    );
    const json = await response.json();
    // let i = 1;
    // await Promise.all(
    //   productImages.map(async (img) => {
    //     if (data.productImageUpdate.includes(i)) {
    //       await productImage(img, json.id, "product-image" + i++);
    //     }
    //   })
    // );

    return json;
  }
}

export async function updateCampaignState(id, state) {
  const a = await actionRequest("PATCH", { state: state });
  console.log("a", a);
  const response = await executeFetch(`${remote}/brands/me/campaigns/${id}`, a);
  return await response.json();
}

//TODO too much copy/paste from updatecampaign
export async function newCampaignChain(data) {
  if (localStorage.getItem("offline")) {
    data.id = self.crypto.randomUUID();
    return campaigns.push(data);
  } else {
    //no-unused-vars
    const { productImage1, productImage2, productImage3, ...without } = data;
    const productImages = [productImage1, productImage2, productImage3];
    const payload = JSON.stringify(without);
    const requestAction = await actionRequest("POST", payload);
    const response = await executeFetch(
      `${remote}/brands/me/campaigns`,
      requestAction
    );
    const json = await response.json();
    let i = 1;
    await Promise.all(
      productImages.map(async (img) => {
        if (img) await productImage(img, json.id, "product-image" + i++);
      })
    );

    return json;
  }
}

export async function productImage(img, id, ref) {
  const requestAction = await actionRequest(
    "POST",
    JSON.stringify({ imageBytes: img.split(",")[1] })
  );
  const response = await executeFetch(
    `${remote}/brands/me/campaigns/${id}/${ref}`,
    requestAction
  );

  console.log(
    "product image " + ref + " for campaign id" + id,
    response.statusText
  );
}

export async function getCampaign(campaignId) {
  if (localStorage.getItem("offline")) {
    const result = campaigns.find((campaign) => campaignId === campaign.id);
    // for offline replace url images is local placeholder bytes
    result.productImage1 = image.bytes;
    result.productImage2 = image.bytes;
    result.productImage3 = image.bytes;
    result.status = "DRAFT";
    return result;
  } else {
    const requestAction = await actionRequest("GET");
    const response = await executeFetch(
      `${remote}/campaigns/${campaignId}`,
      requestAction
    );

    return await response.json();
  }
}

export async function getDetails() {
  return Promise.resolve({
    type: "brand",
    name: "Dom",
    brand: "Pig n Chicken",
  });
}
