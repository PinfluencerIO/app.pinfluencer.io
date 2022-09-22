import {
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterButtons from "../../components/FilterButtons";
import { getCollaborations } from "../../api/api";
import ShowContent from "../../components/ShowContent";
import HeaderAndValue from "../../components/HeaderAndValue";
import EmptyRows from "../../components/EmptyRows";
import StateIconSelector, {
  stateToIcon,
} from "../../components/StateIconSelector";
import AreYouSureDialog from "../../components/AreYouSureDialog";

export const CollaborationsTable = () => {
  const [rows, setRows] = useState([]);
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  // View Content State
  const [openContent, setOpenContent] = useState(false);
  const [content, setContent] = useState(null);
  const handleOpenContent = (row) => {
    setContent(row.contentImage);
    setOpenContent(true);
  };
  const handleCloseContent = () => {
    setContent(null);
    setOpenContent(false);
  };

  // Are you sure dialogs
  const [actionRowId, setActionRowId] = useState(null);

  // Reject Collaboration State
  const [openCheckReject, setOpenCheckReject] = useState(false);
  const handleOpenCheckReject = (id) => {
    setActionRowId(id);
    setOpenCheckReject(true);
  };
  const handleCloseCheckReject = () => {
    setActionRowId(null);
    setOpenCheckReject(false);
  };
  const rejectCollaboration = () => {
    //todo all api
    console.log("call api and REJECT ", actionRowId);
    handleCloseCheckReject();
  };

  // Accept Collaboration State
  const [openCheckAccept, setOpenCheckAccept] = useState(false);
  const handleOpenCheckAccept = (id) => {
    setActionRowId(id);
    setOpenCheckAccept(true);
  };
  const handleCloseCheckAccept = () => {
    setActionRowId(null);
    setOpenCheckAccept(false);
  };
  const acceptCollaboration = () => {
    //todo all api
    console.log("call api and ACCEPT ", actionRowId);
    handleCloseCheckAccept();
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
        filters={[
          { label: "requested", icon: stateToIcon("requested") },
          { label: "approved", icon: stateToIcon("approved") },
          { label: "completed", icon: stateToIcon("completed") },
          { label: "rejected", icon: stateToIcon("rejected") },
        ]}
        filterKey="collaborationState"
      />
      {rows.length === 0 ? (
        <EmptyRows header="No collaborations" value="Try a different filter" />
      ) : (
        populatedRows()
      )}
      <ShowContent
        show={openContent}
        setShow={handleCloseContent}
        content={content}
      />
      <AreYouSureDialog
        header="Are you sure."
        description="Do you want to reject this collaboration request?"
        open={openCheckReject}
        close={handleCloseCheckReject}
        cancel={handleCloseCheckReject}
        action={rejectCollaboration}
      />
      <AreYouSureDialog
        header="Are you sure."
        description="Do you want to accept this collaboration request?"
        open={openCheckAccept}
        close={handleCloseCheckAccept}
        cancel={handleCloseCheckAccept}
        action={acceptCollaboration}
      />
    </Grid>
  );

  function populatedRows() {
    return rows.map((row) => (
      <Grid item key={row.id} xs={12}>
        <Card>
          <CardContent>
            <Grid container justifyContent="space-between">
              <HeaderAndValue header="Campaign" value={row.campaignTitle} />

              <Grid item>
                <Typography variant="h6">
                  <StateIconSelector state={row.collaborationState} />
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
            <HeaderAndValue
              header="Request details"
              value={row.collaborationRequestDetails}
            />
            <HeaderAndValue header="Influencer" value={row.influencerName} />
            <HeaderAndValue
              header="Influencer Address"
              value={row.influencerAddress}
            />
          </CardContent>
          {actionButtons(row)}
        </Card>
      </Grid>
    ));
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
            <Badge badgeContent={row.notifications}>
              <Button size="small" variant="outlined">
                Message
              </Button>
            </Badge>
          ) : (
            <Button size="small" variant="outlined">
              Message
            </Button>
          )}
        </Box>
        <Stack spacing={1} direction="row">
          {row.collaborationState === "requested" && (
            <Fragment>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleOpenCheckAccept(row.id)}
              >
                Accept
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleOpenCheckReject(row.id)}
              >
                Reject
              </Button>
            </Fragment>
          )}
          {row.collaborationState === "approved" && (
            <Button size="small" variant="outlined">
              Complete
            </Button>
          )}
          {row.contentImage && (
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleOpenContent(row)}
            >
              View content
            </Button>
          )}
        </Stack>
      </Stack>
    );
  }
};
