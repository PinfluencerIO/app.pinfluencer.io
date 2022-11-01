import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const CollaborationsStateCounts = (props) => {
  const { hideTitle, collaborations, proposalId } = props;
  const theme = useTheme();
  const collaborationActionStyle = {
    color: theme.palette.primary.main,
  };
  const labelStyle = {
    fontSize: "0.6rem",
  };
  const baseUrl = `/proposal/view/${proposalId}/collaborations`;

  const [applied, setApplied] = React.useState(0);
  const [approved, setApproved] = React.useState(0);
  const [rejected, setRejected] = React.useState(0);

  React.useEffect(() => {
    const collabs = collaborations.filter((c) => c.proposal === proposalId);
    const counts = groupBy(collabs, "state");

    setApplied(counts.APPLIED.length);
    setApproved(counts.APPROVED.length);
    setRejected(counts.REJECTED.length);
  }, [collaborations, proposalId]);

  return (
    <Stack pl={props.pl}>
      {!hideTitle && <Typography variant="h5">Collaborations</Typography>}
      <Stack direction="row" gap={3}>
        <Link
          to={`${baseUrl}/applied`}
          style={collaborationActionStyle}
          role="link"
          title="applied collaborations"
        >
          <Typography variant="subtitle1" sx={labelStyle}>
            Applied ({applied})
          </Typography>
        </Link>
        <Link
          to={`${baseUrl}/approved`}
          style={collaborationActionStyle}
          role="link"
          title="approved collaborations"
        >
          <Typography variant="subtitle1" sx={labelStyle}>
            Approved ({approved})
          </Typography>
        </Link>
        <Link
          to={`${baseUrl}/rejected`}
          style={collaborationActionStyle}
          role="link"
          title="rejected collaborations"
        >
          <Typography variant="subtitle1" sx={labelStyle}>
            Rejected ({rejected})
          </Typography>
        </Link>
      </Stack>
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
