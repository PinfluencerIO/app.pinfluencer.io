import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const BaseComponent = ({ heading, disableBorder = false, children }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      component="section"
      border={0}
      borderColor="green"
      my={disableBorder ? 0 : 1}
      mr={2}
      flex={1}
      height="100%"
      marginBottom={2}
      marginTop={2}
    >
      <Box width="100%" display="flex" flexDirection="column" height="100%">
        <Box
          display="flex"
          bgcolor="#fff"
          borderRadius={4}
          border={disableBorder ? 0 : 1}
          borderColor="rgb(218,220,224)"
          boxSizing="border-box"
          overflow="hidden"
          height="100%"
        >
          <Box>
            <Box
              py={disableBorder ? "0px" : "24px"}
              mx={disableBorder ? "0px" : "24px"}
            >
              <Box component="header" diplay="flex">
                <Box display="flex" flexDirection="column" flex="1 1 0">
                  <Typography
                    variant={disableBorder ? "h6" : "h4"}
                    color="primary"
                  >
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
