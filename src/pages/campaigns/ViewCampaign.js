import React from "react";
import { useParams } from "react-router";
import isValidUUID from "../../components/uuidUtils";
import { BadUrl } from "../BadUrl";

export const ViewCampaign = () => {
  let { id } = useParams();
  console.log("Campaign View id" + id);
  let campaignId = isValidUUID(id);
  if (!campaignId) {
    return <BadUrl />;
  }
  return <div>ViewCampaing</div>;
};
