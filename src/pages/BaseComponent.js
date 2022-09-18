import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const BaseComponent = ({
  heading,
  disableBorder = false,
  disableGutter = false,
  variant = "h6",
  color = "primary",
  children,
}) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      component="section"
      border={0}
      borderColor="blue"
      flex={1}
      height="100%"
    >
      <Box display="flex" flexDirection="column" height="100%" width="100%">
        <Box
          display="flex"
          bgcolor="#fff"
          borderRadius={disableBorder ? 0 : 4}
          border={disableBorder ? 0 : 1}
          borderColor="rgb(218,220,224)"
          boxSizing="border-box"
          overflow="hidden"
          height="100%"
          paddingX={disableGutter ? 0 : 3}
          sx={{ paddingY: { xs: 1, sm: 1, md: 2 } }}
        >
          <Box height="100%" width="100%">
            <Box height="100%" width="100%">
              <Box component="header" diplay="flex" height="100%" width="100%">
                <Box
                  display="flex"
                  flexDirection="column"
                  flex="1 1 0"
                  height="100%"
                  width="100%"
                >
                  <Typography variant={variant} color={color}>
                    {heading}
                  </Typography>
                  <Box
                    sx={{
                      hyphens: "auto",
                      wordBreak: "break-word",
                      wordWrap: "break-word",
                      flexGrow: 1,
                      flexShrink: 1,

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
