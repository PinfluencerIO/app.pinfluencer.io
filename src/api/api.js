import { getToken } from "../context/UserContext";
import { campaigns, image } from "./fake-api";

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

// fetch call that only returns ok response, otherwise throws an exception
export async function executeFetch(url, action) {
  const response = await fetch(url, action);

  if (response.ok) {
    return response;
  }
  throw Error(await response.text());
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
export async function updateCampaign() {
  // if (localStorage.getItem("offline")) {
  //   const camapign = campaigns.find((c) => c.id === data.id);
  //   Object.assign(camapign, data);
  //   return data;
  // } else {
  // const updateImages = productImages.filter(
  //   (img) => !img.startsWith("https")
  // );
  // data.productImageUpdate = updateImages;
  // const payload = JSON.stringify(without);
  // const requestAction = await actionRequest("PUT", payload);
  // const response = await executeFetch(
  //   `${remote}/brands/me/campaigns/${data.id}`,
  //   requestAction
  // );
  // const json = await response.json();
  // let i = 1;
  // await Promise.all(
  //   productImages.map(async (img) => {
  //     if (data.productImageUpdate.includes(i)) {
  //       await productImage(img, json.id, "product-image" + i++);
  //     }
  //   })
  // );
  //   return json; d
}

export async function updateCampaignState(id, state) {
  const action = await actionRequest("PATCH", { state: state });
  const response = await executeFetch(
    `${remote}/brands/me/campaigns/${id}`,
    action
  );
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

  return response;
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
