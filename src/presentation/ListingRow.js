import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import CollaborationStateLink from "./CollaborationStateLink";
import EllipsisTooltip from "./EllipsisTooltip";

export const ListingRow = ({
  id,
  listingTitle,
  productName,
  productImage,
  month,
  year,
  appliedCount,
  approvedCount,
  rejectedCount,
}) => {
  const nav = useNavigate();

  const theme = useTheme();
  const handleClick = () => {
    nav("/listings/view/" + id);
  };
  return (
    <Box border={0} display="flex" gap={1}>
      <Box border={0} flexGrow={0}>
        <Avatar src={productImage} />
      </Box>
      <Box border={0} flexGrow={1} whiteSpace="nowrap" overflow="hidden">
        <EllipsisTooltip
          label="Title"
          labelColor={theme.palette.grey[400]}
          text={listingTitle}
        />
        <EllipsisTooltip
          label="Product"
          labelColor={theme.palette.grey[400]}
          text={productName}
          fontSize="0.9rem"
        />

        <Box border={0} display="flex">
          <Box
            display="flex"
            sx={{ marginTop: "8px", "&>a, p": { fontSize: "0.8rem" } }}
          >
            <Typography
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  color: theme.palette.grey[400],
                },
              }}
            >
              Collaborations:
            </Typography>
            <CollaborationStateLink
              label="Applied"
              count={appliedCount}
              color={theme.palette.info.main}
              path=""
            />
            <CollaborationStateLink
              label="Approved"
              count={approvedCount}
              color={theme.palette.success.main}
              path=""
            />
            <CollaborationStateLink
              label="Rejected"
              count={rejectedCount}
              color={theme.palette.error.main}
              path=""
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
            "&>p": {
              margin: 0,
              padding: 0,
            },
          },
        }}
        border={0}
      >
        <p>{month.slice(0, 3)}</p>
        <p>{year}</p>
      </Box>
      <Box border={0} onClick={handleClick}>
        <KeyboardArrowRightIcon />
      </Box>
    </Box>
  );
};
