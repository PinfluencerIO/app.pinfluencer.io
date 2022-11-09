import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { listings } from "../../api/data";
import { BackLink } from "../../presentation/BackLink";
import { ProposalStep1 } from "../../presentation/proposal/ProposalStep1";
import { ProposalStep2 } from "../../presentation/proposal/ProposalStep2";
import { ProposalStep3 } from "../../presentation/proposal/ProposalStep3";
import { ProposalStep4 } from "../../presentation/proposal/ProposalStep4";
import { ProfileCard } from "../profile/ProfileCard";

const ListingView = () => {
  // 👇️ get ID from url
  const params = useParams();
  const [listing, setListing] = React.useState(undefined);

  useEffect(() => {
    const listing = listings.find((p) => {
      return p.id === params.id;
    });
    setListing(listing);
  }, [params]);

  if (!listing) return "Loading...";

  return (
    <Stack spacing={2} mx={1}>
      <BackLink />
      <ProfileCard title="Details" urlPrefix={`/listings/edit/${params.id}/`}>
        <ProposalStep1 data={listing} view />
      </ProfileCard>
      <ProfileCard title="Product" urlPrefix={`/listings/edit/${params.id}/`}>
        <ProposalStep2 data={listing} view id="image" />
      </ProfileCard>
      <ProfileCard
        title="Categories"
        urlPrefix={`/listings/edit/${params.id}/`}
      >
        <ProposalStep3 data={listing} view />
      </ProfileCard>
      <ProfileCard title="Values" urlPrefix={`/listings/edit/${params.id}/`}>
        <ProposalStep4 data={listing} view />
      </ProfileCard>
    </Stack>
  );
};

export default ListingView;
