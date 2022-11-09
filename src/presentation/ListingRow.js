import { Badge, Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { ImageBox } from "./image/ImageBox";

export const ListingRow = ({
  id,
  listingTitle,
  productImage,
  month,
  year,
  appliedCount,
  approvedCount,
}) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/listings/view/" + id);
  };
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      borderBottom={1}
      pb={1}
    >
      <Box display="flex">
        <Box>
          <ImageBox margin="0" imageSrc={productImage} />
        </Box>

        <Box mx={1}>
          <Box
            maxWidth={{ xs: "450px", sm: "550px", md: "700px", lg: "1000px" }}
            mb={1}
          >
            {listingTitle}
          </Box>
          <Box fontSize="1rem" color={(theme) => theme.palette.grey[700]}>
            {month.slice(0, 3)} {year}
          </Box>
        </Box>
      </Box>
      <Box
        my={1}
        display="flex"
        flexDirection={{ xs: "row", sm: "column" }}
        gap={2}
      >
        {action("Applications", appliedCount, () => {
          console.log("applications");
        })}
        {action("Collaborations", approvedCount, () => {
          console.log("collaborations");
        })}
        {action("View", 0, handleClick)}
      </Box>
    </Box>
  );
};

const action = (text, count, handleClick) => {
  return (
    <Box>
      <Badge badgeContent={count} color="primary">
        <Button
          variant="outlined"
          size="small"
          sx={{
            fontSize: { xs: ".7rem", sm: ".9rem", md: "1rem" },
            fontWeight: 600,
            width: "fit-content",
          }}
          onClick={handleClick}
        >
          {text}
        </Button>
      </Badge>
    </Box>
  );
};
