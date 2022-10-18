import React, { useEffect } from "react";
import { getBrand } from "../../api/brandApi";
import { getInfluencer } from "../../api/influencerApi";
import { BrandPublicView } from "./BrandPublicView";
import { InfluencerPublicView } from "./InfluencerPublicView";
import { typeSwitch } from "./typeSwitch";
export const PublicView = ({ type }) => {
  const [data, setData] = React.useState();
  useEffect(() => {
    typeSwitch(type, getBrand, getInfluencer).then((u) => setData(u));
  }, [type]);

  if (!data) return "Loading...";

  return typeSwitch(
    type,
    <BrandPublicView data={data} />,
    <InfluencerPublicView data={data} />
  );
};
