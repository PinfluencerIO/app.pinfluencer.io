import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import CollaborationStateLink from "./CollaborationStateLink";

export const DisplayCollaboration = ({
  appliedCount,
  approvedCount,
  id,
  path,
}) => {
  const theme = useTheme();
  return (
    <Box border={0} display="flex" flexWrap="wrap">
      <Box
        display="flex"
        sx={{ marginTop: "8px", "&>a, p": { fontSize: "1.2rem" } }}
      >
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
              color: theme.palette.grey[700],
            },
          }}
        >
          Collaborations:
        </Typography>
        <CollaborationStateLink
          label="New applicants"
          count={appliedCount}
          color={theme.palette.info.main}
          path={path(id, "applied")}
        />
        <CollaborationStateLink
          label="Actives collaborations"
          count={approvedCount}
          color={theme.palette.success.main}
          path={path(id, "approved")}
        />
      </Box>
    </Box>
  );
};
