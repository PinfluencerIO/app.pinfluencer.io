import { Box, Typography } from "@mui/material";
import React from "react";

export default function HeaderAndValue({ header, value }) {
  return (
    <React.Fragment>
      <Box height={100}>
        <Typography
          aria-describedby="modal-check-reject-modal-description"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h6"
        >
          {header}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
          variant="body1"
        >
          {value}
        </Typography>
      </Box>
    </React.Fragment>
  );
}
