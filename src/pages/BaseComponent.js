import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const BaseComponent = ({ heading = "Basic Info", children }) => {
  return (
    <Box
      display="flex"
      alignItems="stretch"
      flexWrap="wrap"
      component="section"
      border={0}
      borderColor="green"
      my={1}
      mr={2}
    >
      <Box width="100%" display="flex" flexDirection="column">
        <Box
          display="flex"
          flexGrow={1}
          flexShrink={1}
          bgcolor="#fff"
          borderRadius={4}
          border={1}
          borderColor="rgb(218,220,224)"
          boxSizing="border-box"
          overflow="hidden"
        >
          <Box minHeight={1}>
            <Box py="24px" mx="24px">
              <Box component="header" diplay="flex">
                <Box display="flex" flexDirection="column" flex="1 1 0">
                  <Typography variant="h6" fontWeight={700}>
                    {heading}
                  </Typography>
                  <Box
                    sx={{
                      hyphens: "auto",
                      wordBreak: "break-word",
                      wordWrap: "break-word",
                      flexGrow: 1,
                      flexShrink: 1,
                      m: 0,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    {children}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
