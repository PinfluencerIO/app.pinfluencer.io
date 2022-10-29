import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { getBrand } from "../../api/brandApi";
import { getInfluencer } from "../../api/influencerApi";
import { BackLink } from "../../presentation/BackLink";
import { BrandProfile } from "./BrandProfile";
import { InfluencerProfile } from "./InfluencerProfile";
import { typeSwitch } from "./typeSwitch";

export const Profile = ({ type }) => {
  const [data, setData] = React.useState();
  useEffect(() => {
    const api = typeSwitch(type, getBrand, getInfluencer);
    api().then((u) => setData(u));
  }, [type]);

  if (!data) return "Loading...";

  return (
    <>
      <Stack width="100%" rowGap={2}>
        <BackLink />
        {typeSwitch(
          type,
          <BrandProfile data={data} />,
          <InfluencerProfile data={data} />
        )}
      </Stack>
    </>
  );
};
