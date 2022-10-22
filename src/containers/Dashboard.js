import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Paper, Popper, Stack, Typography } from "@mui/material";

import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { proposals as data } from "../api/data";
import UserContext from "../context/UserContext";
import { userType } from "./App";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [proposals, setProposals] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  false && handleClick;
  useEffect(() => {
    console.log("proposals", data);
    const useType = userType(user);
    if (useType === "brand") {
      setProposals(data);
    }
  }, [user]);
  const open = Boolean(anchorEl);

  const id = open ? "simple-popper" : undefined;
  const text = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <Stack rowGap={2} maxWidth={700}>
      <Typography variant="body1">
        Hi {user.given_name} - This is where details of what is going on with
        your Pinfluencer account. Widgets with metrics and all that good stuff.
      </Typography>
      <Typography variant="body1">
        Why not create a{" "}
        <Link to="/proposal/new">New Collaboration Proposal</Link>
      </Typography>

      <Paper variant="outlined" sx={{ padding: 1 }}>
        <Typography variant="h5">Proposals ({proposals.length})</Typography>
        <Box sx={{ overflow: "auto", height: "200px" }}>
          {proposals.map((p) => (
            <div
              style={{
                display: "flex",
                // flexWrap: "nowrap",
                // maxWidth: "600px",
                alignItems: "center",
                marginTop: "10px",
                justifyContent: "space-between",
              }}
              key={p.title}
            >
              <div style={{ whiteSpace: "nowrap", marginRight: "10px" }}>
                <Avatar src={p.image} />
              </div>
              <div
                style={{
                  minWidth: "100px",
                  overflow: "hidden",
                  flexGrow: 2,
                  marginRight: "10px",
                }}
              >
                <div style={text}>{p.title}</div>
                <div style={text}>{p.name}</div>
              </div>
              <Box sx={{ border: "1px solid" }}>
                <MoreVertIcon onClick={handleClick} />
              </Box>
            </div>
          ))}
        </Box>
      </Paper>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="left-start">
        <Paper sx={{ padding: 3 }}>
          <Box>Some info</Box>
          <Box>Some details of something</Box>
          <Box>Action | Action | Action</Box>
        </Paper>
      </Popper>
    </Stack>
  );
};
