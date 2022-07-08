import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCampaigns } from "../../api/api";
import CampaignFilterButtons from "../../components/CampaignFilterButtons";
import { ImgOrBlank } from "../../components/ImgOrBlank";

//TODO replace data grid 💤 with cards that are sortable 👏 🔥
export const CampaignsTable = () => {
  const [rows, setRows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  useEffect(() => {
    getCampaigns()
      .then((data) => {
        if (searchParams.get("filter")) {
          setRows(
            data.filter((row) => {
              return (
                row.campaignState.toLowerCase() ===
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
      <Grid container item>
        <Grid container item direction="row" justifyContent="space-between">
          <Typography variant="h4" mt={1}>
            All Campaigns
          </Typography>
          <Button variant="contained">Create New Campaign</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={5} direction="column">
        <Grid item>
          <CampaignFilterButtons
            values={["Draft", "Active", "Closed"]}
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
            <Typography variant="h5">No campaigns</Typography>
            <Typography variant="h6">
              Try a different filter or create a new campaign
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  function populatedRows() {
    return rows.map((row) => (
      <Grid key={row.id} item>
        <Card>
          <CardContent>
            <Typography
              sx={{
                width: "400px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="h5"
            >
              {row.campaignTitle}
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              {row.campaignDescription}
            </Typography>
            <Typography
              sx={{
                width: "400px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginTop: "20px",
              }}
              variant="h6"
            >
              {row.productTitle}
            </Typography>
            <Typography sx={{ marginTop: "10px" }}>
              {row.productDescription}
            </Typography>

            <Grid container spacing={3} mt={1}>
              <Grid item>
                <ImgOrBlank
                  imageSrc={row.productImage1}
                  altLabel="Product 1"
                  width="150px"
                  height="150px"
                />
              </Grid>
              <Grid item>
                <ImgOrBlank
                  imageSrc={row.productImage2}
                  altLabel="Product 2"
                  width="150px"
                  height="150px"
                />
              </Grid>
              <Grid item>
                <ImgOrBlank
                  imageSrc={row.productImage3}
                  altLabel="Product 3"
                  width="150px"
                  height="150px"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ ml: "8px" }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => nav(row.id)}
            >
              View
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  }
};
