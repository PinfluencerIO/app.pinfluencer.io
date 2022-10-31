import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { collaborations, proposals } from "../../api/data";
import { BackLink } from "../../presentation/BackLink";
import { CollaborationsStateCounts } from "../../presentation/CollaborationsStateCounts";
import { ProposalStep1 } from "../../presentation/proposal/ProposalStep1";
import { ProposalStep2 } from "../../presentation/proposal/ProposalStep2";
import { ProposalStep3 } from "../../presentation/proposal/ProposalStep3";
import { ProposalStep4 } from "../../presentation/proposal/ProposalStep4";
import { ProfileCard } from "../profile/ProfileCard";

export const ProposalView = () => {
  // 👇️ get ID from url
  const params = useParams();
  const [proposal, setProposal] = React.useState(undefined);

  useEffect(() => {
    const proposal = proposals.filter((p) => {
      return p.id === params.id || p.id === parseInt(params.id);
    })[0];
    setProposal(proposal);
  }, [params]);

  if (!proposal) return "Loading...";

  return (
    <Stack spacing={2} mt={0}>
      <BackLink />

      <CollaborationsStateCounts
        pl={2}
        collaborations={collaborations}
        proposalId={parseInt(params.id)}
      />

      <ProfileCard title="Details" urlPrefix={`/proposal/edit/${params.id}/`}>
        <ProposalStep1 data={proposal} view />
      </ProfileCard>
      <ProfileCard title="Product" urlPrefix={`/proposal/edit/${params.id}/`}>
        <ProposalStep2 data={proposal} view id="image" />
      </ProfileCard>
      <ProfileCard
        title="Categories"
        urlPrefix={`/proposal/edit/${params.id}/`}
      >
        <ProposalStep3 data={proposal} view />
      </ProfileCard>
      <ProfileCard title="Values" urlPrefix={`/proposal/edit/${params.id}/`}>
        <ProposalStep4 data={proposal} view />
      </ProfileCard>
    </Stack>
  );
};
