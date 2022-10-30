import { useTheme } from "@emotion/react";
// import MailIcon from "@mui/icons-material/Mail";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  // Badge,
  Box,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { proposals as data } from "../../api/data";
const text = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};
export const ProposalList = () => {
  const theme = useTheme();
  const nav = useNavigate();

  const [proposals, setProposals] = React.useState([]);

  const handleClick = (proposal) => {
    nav("/proposal/view/" + proposal.id);
  };
  useEffect(() => {
    setProposals(data);
  }, []);
  return (
    <Box>
      <Typography variant="body1">
        Create a{" "}
        <Link
          to="/proposal/new"
          title="new collaboration proposal"
          style={{ color: theme.palette.primary.main }}
        >
          New Collaboration Proposal
        </Link>
      </Typography>
      <Paper variant="outlined" sx={{ padding: 1 }}>
        <Typography variant="h5">My Listings ({proposals.length})</Typography>
        <Box sx={{ overflow: "auto", height: "200px" }}>
          {proposals
            .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
            .map((p) => (
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
                {/* <Badge
                  badgeContent={4}
                  color="primary"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: 9,
                      height: 15,
                      minWidth: 15,
                    },
                    mt: 1.5,
                  }}
                >
                  <MailIcon fontSize="small" color="action" />
                </Badge> */}
                <IconButton onClick={() => handleClick(p)}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>
            ))}
        </Box>
      </Paper>
    </Box>
  );
};
