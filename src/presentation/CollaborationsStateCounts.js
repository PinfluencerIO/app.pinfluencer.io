import { Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const CollaborationsStateCounts = (props) => {
  const { hideTitle, collaborations, listingId, queryType, active } = props;
  const theme = useTheme();
  const collaborationActionStyle = (path) => {
    return {
      color:
        active === path
          ? theme.palette.active.main
          : theme.palette.primary.main,
    };
  };
  const labelStyle = {
    fontSize: "0.6rem",
  };
  const baseUrl = listingId
    ? `/collaborations/${listingId}`
    : "/collaborations";

  const [applied, setApplied] = React.useState(0);
  const [approved, setApproved] = React.useState(0);
  const [rejected, setRejected] = React.useState(0);

  React.useEffect(() => {
    let collabs;
    if (listingId)
      collabs = collaborations.filter((c) => c.listing === listingId);
    else collabs = collaborations;
    const counts = groupBy(collabs, "state");
    setApplied(counts.APPLIED.length);
    setApproved(counts.APPROVED.length);
    setRejected(counts.REJECTED.length);
  }, [collaborations, listingId]);

  const item = (label, path, count) => {
    return (
      <Link
        to={queryType ? `${baseUrl}?filter=${path}` : `${baseUrl}/${path}`}
        style={collaborationActionStyle(path)}
        role="link"
        title={label}
      >
        <Typography variant="subtitle1" sx={labelStyle}>
          {label} ({count})
        </Typography>
      </Link>
    );
  };

  return (
    <Stack pl={props.pl} pb={props.pb}>
      {!hideTitle && (
        <Typography ml={-0.5} variant="h5">
          Collaborations
        </Typography>
      )}
      <Stack direction="row" gap={3}>
        <Typography
          sx={{
            display: { xs: "none", sm: hideTitle && "block" },
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
        >
          Collaborations:
        </Typography>
        {item("Applied", "applied", applied)}
        {item("Approved", "approved", approved)}
        {item("Rejected", "rejected", rejected)}
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
