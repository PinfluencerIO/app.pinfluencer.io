import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { getBrand } from "../../api/brandApi";
import { getInfluencer } from "../../api/influencerApi";
import { BackLink } from "../../components/displayTypes/BackLink";
import { BrandProfile } from "./BrandProfile";
import { InfluencerProfile } from "./InfluencerProfile";

export const Profile = ({ type }) => {
  const [data, setData] = React.useState();
  useEffect(() => {
    const api = type === "brand" ? getBrand : getInfluencer;
    api().then((u) => setData(u));
  }, [type]);

  if (!data) return "Loading...";

  return (
    <>
      <Stack width="100%" rowGap={3} mt={-5}>
        <BackLink backLocation=".." />
        {type === "brand" ? (
          <BrandProfile data={data} />
        ) : (
          <InfluencerProfile data={data} />
        )}
      </Stack>
    </>
  );
};
