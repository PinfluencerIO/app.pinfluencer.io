import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router";

export const HorizontalNavigation = ({ userType }) => {
  const nav = useNavigate();
  const dashboardRef = useRef();
  const collaborationRef = useRef();
  const viewRef = useRef();
  const isStartInView = useIsInViewport(viewRef, dashboardRef);
  const isEndInView = useIsInViewport(viewRef, collaborationRef);

  const isActive = (page) => {
    return location.hash.toLowerCase().includes(page.path.toLowerCase());
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
  // eslint-disable-next-line
  let pages = useMemo(() => {
    return {
      brand: [
        {
          label: "Dashboard",
          path: "dashboard",
          icon: <DashboardIcon />,
          ref: dashboardRef,
        },

        {
          label: "Collaborations",
          path: "collaborations",
          icon: <GroupIcon />,
          ref: collaborationRef,
        },
      ],
      influencer: [
        {
          label: "Dashboard",
          path: "dashboard",
          icon: <DashboardIcon />,
          ref: dashboardRef,
        },
        {
          label: "Collaborations",
          path: "collaborations",
          icon: <GroupIcon />,
          ref: collaborationRef,
        },
      ],
    };
  });

  useEffect(() => {
    const result = pages[userType].filter((page) => {
      return location.pathname.toLowerCase().includes(page.path.toLowerCase());
    });
    result.length > 0 &&
      result[0].ref.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
  }, [pages, userType]);

  return (
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
        {pages[userType].map((page) => (
          <ListItem
            ref={page.ref}
            key={page.path}
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
              onClick={() => nav(page.path)}
            >
              <ListItemText
                sx={{
                  color: (theme) => theme.palette.common.black,
                  whiteSpace: "nowrap",
                  border: "0px solid green",
                }}
                primary={page.label}
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
                    border: isActive(page) ? "solid 3px" : "none 0px",
                    borderColor: (theme) => theme.palette.active.main,
                    borderRadius: "3px",
                    minWidth: "24px",
                    width: "100%",
                  }}
                ></Box>
              </Box>
            </ListItemButton>
          </ListItem>
        ))}
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
  );
};
