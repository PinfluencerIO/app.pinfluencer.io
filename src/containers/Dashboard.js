import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { proposals as data } from "../api/data";
import UserContext from "../context/UserContext";

export const Dashboard = () => {
  const nav = useNavigate();
  const { user } = useContext(UserContext);
  const [proposals, setProposals] = React.useState([]);

  const handleClick = (proposal) => {
    nav("/proposal/view/" + proposal.id);
  };
  useEffect(() => {
    setProposals(data);
  }, [user]);

  const text = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <Stack rowGap={2}>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Hi {user.given_name} - This is where details of what is going on with
        your Pinfluencer account. Widgets with metrics and all that good stuff.
      </Typography>
      <Typography variant="body1">
        Create a <Link to="/proposal/new">New Collaboration Proposal</Link>
      </Typography>

      <Paper variant="outlined" sx={{ padding: 1 }}>
        <Typography variant="h5">Proposals ({proposals.length})</Typography>
        <Box sx={{ overflow: "auto", height: "200px" }}>
          {proposals.map((p) => (
            <Box
              key={p.id}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: "10px",
                justifyContent: "space-between",
                cursor: "pointer",
              }}
              onClick={() => handleClick(p)}
            >
              <Box style={{ whiteSpace: "nowrap", marginRight: "10px" }}>
                <Avatar src={p.image} />
              </Box>
              <Box
                style={{
                  minWidth: "100px",
                  overflow: "hidden",
                  flexGrow: 2,
                  marginRight: "10px",
                }}
              >
                <Box style={text}>{p.title}</Box>
                <Box style={text}>{p.name}</Box>
              </Box>
              <Box>
                <IconButton onClick={() => handleClick(p)}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Stack>
  );
};
