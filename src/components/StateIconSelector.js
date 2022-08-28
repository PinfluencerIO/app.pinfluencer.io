import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Tooltip } from "@mui/material";
import React from "react";

export default function StateIconSelector({ state }) {
  switch (state) {
    case "requested":
      return (
        <Tooltip title="Collaboration Requested" placement="top" arrow>
          {stateToIcon(state)}
        </Tooltip>
      );
    case "approved":
      return (
        <Tooltip title="Collaboration Approved" placement="top" arrow>
          {stateToIcon(state)}
        </Tooltip>
      );
    case "completed":
      return (
        <Tooltip title="Collaboration Completed" placement="top" arrow>
          {stateToIcon(state)}
        </Tooltip>
      );
    case "rejected":
      return (
        <Tooltip title="Collaboration Rejected" placement="top" arrow>
          {stateToIcon(state)}
        </Tooltip>
      );
    default:
      return state;
  }
}

export function stateToIcon(state) {
  switch (state) {
    case "requested":
      return <NotificationAddIcon />;
    case "approved":
      return <ThumbUpOffAltIcon />;
    case "completed":
      return <TaskAltIcon />;
    case "rejected":
      return <ThumbDownOffAltIcon />;
  }
}
