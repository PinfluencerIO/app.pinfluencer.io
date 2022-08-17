import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CampaignFilterButtons from "../../components/CampaignFilterButtons";
import { getCollaborations } from "../../api/api";

export const CollaborationsTable = () => {
  const [rows, setRows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCollaborations()
      .then((data) => {
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
          console.log("data", { data });
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
    <Grid container>
      <Grid container item direction="row" justifyContent="space-between">
        <Typography variant="h4" mt={1}>
          Collaborations
        </Typography>
      </Grid>
      <Grid container spacing={3} mt={5} direction="column">
        <Grid item>
          <CampaignFilterButtons
            values={["Requested", "Approved", "Completed", "Rejected"]}
            setSearchParams={setSearchParams}
          />
        </Grid>
        {rows.length === 0 ? emptyRows() : populatedRows()}
      </Grid>
    </Grid>
  );
  function emptyRows() {
    return (
      <Grid item>
        <Card>
          <CardContent>
            <Typography variant="h5">No collaborations</Typography>
            <Typography variant="h6">Try a different filter</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  function populatedRows() {
    return rows.map((row) => (
      <Grid item key={row.id}>
        <Card>
          <CardContent>
            <Typography variant="h5">{row.campaignTitle}</Typography>
            <Typography variant="h6">{row.collaborationState}</Typography>
            <Typography variant="h6">
              {row.collaborationRequestDetails}
            </Typography>
            <Typography variant="h6">{row.influencerName}</Typography>
            <Typography variant="h6">{row.influencerAddress}</Typography>
          </CardContent>
          <CardActions>
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
              <Fragment>
                <Button size="small" color="primary" variant="outlined">
                  Complete
                </Button>
              </Fragment>
            )}
            {row.contentImage && (
              <Fragment>
                <Button size="small" color="secondary" variant="outlined">
                  View content
                </Button>
              </Fragment>
            )}
            <Button size="small" color="black" variant="outlined">
              Message
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  }
};
