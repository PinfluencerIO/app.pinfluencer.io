import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LinkedToolTip } from "../../displayTypes/LinkedToolTip";
import { AvatarMenu } from "./AvatarMenu";

export const Header = (props) => {
  const theme = useTheme();
  const nav = useNavigate();
  const location = useLocation();
  const refStart = useRef();
  const refMid = useRef();
  const refEnd = useRef();
  const refNon = useRef();
  const viewRef = useRef();
  const isStartInView = useIsInViewport(viewRef, refStart);
  const isEndInView = useIsInViewport(viewRef, refEnd);
  function getRef(index) {
    if (index === 0) return refStart;
    if (index === 1) return refMid;
    if (index === 2) return refEnd;
    return refNon;
  }

  useEffect(() => {
    // 👇️ listen for changes
    console.log("isStartInView: ", isStartInView);
    console.log("isEndInView: ", isEndInView);
  }, [isStartInView, isEndInView]);

  useEffect(() => {
    if (location.pathname.toLowerCase().includes("dashboard")) {
      console.log("scroll to dashboard");
      refStart.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (location.pathname.toLowerCase().includes("campaign")) {
      console.log("scroll to campaign");
      refMid.current.scrollIntoView({ behavior: "smooth", inline: "center" });
      return;
    }
    if (location.pathname.toLowerCase().includes("collaboration")) {
      console.log("scroll to collaboration");
      refEnd.current.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }, [location]);

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar sx={{ display: "flex" }}>
            <LinkedToolTip
              title="Home"
              route="/"
              style={{
                textDecoration: "none",
                color: theme.palette.primary.main,
              }}
            >
              <Typography variant="h6" component="div">
                Pinfluencer
              </Typography>
            </LinkedToolTip>
            <Box flex={1}></Box>
            <AvatarMenu />
          </Toolbar>
          {true && (
            <Box
              ref={viewRef}
              sx={{
                padding: 0,
                margin: 0,
                border: "0px solid lightblue",
                overflow: "hidden",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 0,
                  margin: 0,
                  overflowX: "scroll",
                  overflowY: "hidden",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    width: 0,
                    height: 0,
                  },
                }}
              >
                {["Dashboard", "Campaign", "Collaboration"].map(
                  (page, index) => (
                    <ListItem
                      ref={getRef(index)}
                      key={page}
                      sx={{
                        border: "0px solid red",
                        padding: 0,
                        margin: 0,
                      }}
                    >
                      <ListItemButton
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          border: "0px solid blue",
                          padding: "0 16px",
                          margin: 0,
                          "&:hover": {
                            borderRadius: "25px",
                            backgroundColor: "transparent",
                            color: (theme) => theme.palette.active.main,
                          },
                        }}
                        onClick={() => nav(page)}
                      >
                        <ListItemText
                          sx={{
                            color: (theme) => theme.palette.common.black,
                            whiteSpace: "nowrap",
                            border: "0px solid green",
                          }}
                          primary={page}
                        />
                        <Box
                          sx={{
                            height: "3px",
                            overflowY: "hidden",
                            padding: "0 2px",
                            border: "0px solid pink",
                            width: "100%",
                          }}
                        >
                          <Box
                            sx={{
                              border: location.pathname
                                .toLowerCase()
                                .includes(page.toLowerCase())
                                ? "solid 3px"
                                : "none 0px",
                              borderColor: (theme) => theme.palette.active.main,
                              borderRadius: "3px",
                              minWidth: "24px",
                              width: "100%",
                            }}
                          ></Box>
                        </Box>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
              <Box
                sx={{
                  height: "38px",
                  pointerEvents: "none",
                  position: "absolute",
                  top: 48,
                  width: "54px",
                  left: 0,
                  backgroundImage: isStartInView
                    ? ""
                    : "linear-gradient(270deg,rgba(255,255,255,0) 0,rgba(255,255,255,.9) 70%)",
                }}
              ></Box>
              <Box
                sx={{
                  height: "38px",
                  pointerEvents: "none",
                  position: "absolute",
                  top: 48,
                  width: "54px",
                  right: 0,
                  backgroundImage: isEndInView
                    ? ""
                    : "linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.9) 70%)",
                }}
              ></Box>
            </Box>
          )}
        </AppBar>
      </ElevationScroll>
    </>
  );
};

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    sx: {
      backgroundColor: "rgba(255,255,255,0.96)",
      borderBottom: (theme) =>
        trigger ? "" : "1px solid " + theme.palette.divider,
      color: (theme) => theme.palette.primary.main,
    },
    elevation: trigger ? 1 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function useIsInViewport(viewRef, ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => setIsIntersecting(entry.isIntersecting),
        { root: viewRef.current, threshold: 1.0, rootMargin: "0px" }
      ),
    [viewRef]
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
