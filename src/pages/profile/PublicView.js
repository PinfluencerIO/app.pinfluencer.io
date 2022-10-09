import React, { useEffect } from "react";
import { getBrand } from "../../api/brandApi";
import { getInfluencer } from "../../api/influencerApi";
import { BrandPublicView } from "./BrandPublicView";
export const PublicView = ({ type }) => {
  const [data, setData] = React.useState();
  useEffect(() => {
    let api = type === "brand" ? getBrand : getInfluencer;
    api().then((u) => setData(u));
  }, [type]);

  if (!data) return "Loading...";

  return type === "brand" ? <BrandPublicView data={data} /> : "inf";
};
