import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { collaborations, proposals } from "../../api/data";
import { BackLink } from "../../presentation/BackLink";
import { ProposalStep1 } from "../../presentation/proposal/ProposalStep1";
import { ProposalStep2 } from "../../presentation/proposal/ProposalStep2";
import { ProposalStep3 } from "../../presentation/proposal/ProposalStep3";
import { ProposalStep4 } from "../../presentation/proposal/ProposalStep4";
import { ProfileCard } from "../profile/ProfileCard";

export const ProposalView = () => {
  const theme = useTheme();
  // 👇️ get ID from url
  const params = useParams();
  const [proposal, setProposal] = React.useState(undefined);
  const [applied, setApplied] = React.useState(0);
  const [approved, setApproved] = React.useState(0);
  const [rejected, setRejected] = React.useState(0);
  const collaborationActionStyle = {
    cursor: "pointer",
    color: theme.palette.primary.main,
  };

  useEffect(() => {
    const proposal = proposals.filter((p) => {
      return p.id === params.id || p.id === parseInt(params.id);
    })[0];
    setProposal(proposal);

    console.log("filted p", proposal);
    const collabs = collaborations.filter(
      (c) => c.proposal === parseInt(params.id)
    );
    const counts = groupBy(collabs, "state");

    setApplied(counts.APPLIED.length);
    setApproved(counts.APPROVED.length);
    setRejected(counts.REJECTED.length);
  }, [params]);

  if (!proposal) return "Loading...";

  return (
    <Stack spacing={2} mt={0}>
      <BackLink />

      <Stack pl={2}>
        <Typography variant="h5">Collaborations</Typography>
        <Stack direction="row" gap={3}>
          <Link
            to={`collaboration/applied`}
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
            role="link"
            title="applied collaborations"
          >
            <Typography sx={collaborationActionStyle} variant="subtitle1">
              Applied ({applied})
            </Typography>
          </Link>
          <Link
            to={`collaboration/approved`}
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
            role="link"
            title="approved collaborations"
          >
            <Typography sx={collaborationActionStyle} variant="subtitle1">
              Approved ({approved})
            </Typography>
          </Link>
          <Link
            to={`collaboration/rejecfed`}
            style={{
              textDecoration: "none",
              color: theme.palette.primary.main,
            }}
            role="link"
            title="rejected collaborations"
          >
            <Typography sx={collaborationActionStyle} variant="subtitle1">
              Rejected ({rejected})
            </Typography>
          </Link>
        </Stack>
      </Stack>

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

function groupBy(objectArray, property) {
  return objectArray.reduce(
    function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    },
    { APPLIED: [], APPROVED: [], REJECTED: [] }
  );
}
