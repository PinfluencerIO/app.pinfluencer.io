import {
  Badge,
  Box,
  Button,
  Card,
  // CardActions,
  CardContent,
  Grid,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterButtons from "../../components/FilterButtons";
import { getCollaborations } from "../../api/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CollaborationsTable = () => {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState(null);
  const handleOpen = (row) => {
    setContent(row.contentImage);
    setOpen(true);
  };
  const handleClose = () => {
    setContent(null);
    setOpen(false);
  };

  useEffect(() => {
    getCollaborations()
      .then((data) => {
        setData(data);
        if (searchParams.get("filter")) {
          setRows(
            data.filter((row) => {
              return (
                row.collaborationState.toLowerCase() ===
                searchParams.get("filter").toLowerCase()
              );
            })
          );
        } else {
          setRows(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        //TODO handle error sign posting to user
        console.error(err);
      });
  }, [searchParams]);

  if (loading) {
    return "Loading...";
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Collaborations</Typography>
      </Grid>

      <FilterButtons
        data={data}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        filterNames={["requested", "approved", "completed", "rejected"]}
        filterKey="collaborationState"
      />
      {rows.length === 0 ? emptyRows() : populatedRows()}
      {viewContentModal()}
    </Grid>
  );
  function viewContentModal() {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Content created
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Details of where this content can be found outside of Pinfluencer
          </Typography>
          <img src={content} alt="Created content" />
        </Box>
      </Modal>
    );
  }

  function emptyRows() {
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>
            {headerAndValue("No collaborations", "Try a different filter")}
          </CardContent>
        </Card>
      </Grid>
    );
  }
  function populatedRows() {
    return rows.map((row) => (
      <Grid item key={row.id} xs={12}>
        <Card>
          <CardContent>
            <Grid container justifyContent="space-between">
              {headerAndValue("Campaign", row.campaignTitle)}

              <Grid item>
                <Typography variant="h6">
                  {renderStateIcon(row.collaborationState)}
                </Typography>
              </Grid>
            </Grid>
            <img
              width="150"
              height="150"
              src={row.productImage}
              alt="Product"
              style={{ paddingBottom: "20px" }}
            />
            {headerAndValue("Request details", row.collaborationRequestDetails)}
            {headerAndValue("Influencer", row.influencerName)}
            {headerAndValue("Influencer Address", row.influencerAddress)}
          </CardContent>
          {actionButtons(row)}
        </Card>
      </Grid>
    ));
  }
  //todo extract this out for wider use
  function headerAndValue(header, value) {
    if (value)
      return (
        <Grid item sx={{ pb: "20px" }}>
          <Typography
            sx={{
              color: "lightText",
              display: { xs: "none", sm: "block" },
            }}
          >
            {header}
          </Typography>
          <Typography variant="h5">{value}</Typography>
        </Grid>
      );
  }
  function actionButtons(row) {
    return (
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "10px" }}
      >
        <Box sx={{ mr: "5px" }}>
          {row.notifications > 0 ? (
            <Badge badgeContent={row.notifications} color="primary">
              <Button size="small" color="black" variant="outlined">
                Message
              </Button>
            </Badge>
          ) : (
            <Button size="small" color="black" variant="outlined">
              Message
            </Button>
          )}
        </Box>
        <Stack spacing={1} direction="row">
          {row.collaborationState === "requested" && (
            <Fragment>
              <Button size="small" color="primary" variant="outlined">
                Accept
              </Button>
              <Button size="small" color="red" variant="outlined">
                Reject
              </Button>
            </Fragment>
          )}
          {row.collaborationState === "approved" && (
            <Button size="small" color="primary" variant="outlined">
              Complete
            </Button>
          )}
          {row.contentImage && (
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => handleOpen(row)}
            >
              View content
            </Button>
          )}
        </Stack>
      </Stack>
    );
  }
  function renderStateIcon(state) {
    switch (state) {
      case "requested":
        return (
          <Tooltip title="Collaboration Requested" placement="top" arrow>
            <NotificationAddIcon />
          </Tooltip>
        );
      case "approved":
        return (
          <Tooltip title="Collaboration Approved" placement="top" arrow>
            <ThumbUpOffAltIcon />
          </Tooltip>
        );
      case "completed":
        return (
          <Tooltip title="Collaboration Completed" placement="top" arrow>
            <TaskAltIcon />
          </Tooltip>
        );
      case "rejected":
        return (
          <Tooltip title="Collaboration Rejected" placement="top" arrow>
            <ThumbDownOffAltIcon />
          </Tooltip>
        );
      default:
        return state;
    }
  }
};
