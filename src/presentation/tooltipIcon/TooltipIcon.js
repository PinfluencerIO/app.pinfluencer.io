import { Tooltip } from "@mui/material";
import React from "react";

export default function TooltipIcon({ toolTip, icon }) {
  return <Tooltip title={toolTip}>{icon}</Tooltip>;
}
