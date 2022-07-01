import React from "react";
import { useParams } from "react-router";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const EditCampaign = () => {
  let { id } = useParams();
  let campaignId = isValidUUID(id);
  if (!campaignId) {
    return <BadUrl />;
  }
  return <div>EditCampaign</div>;
};
