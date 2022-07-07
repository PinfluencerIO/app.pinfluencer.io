import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
// import { GridActionsCellItem } from "@mui/x-data-grid";
import React, { Fragment } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CampaignFilterButtons from "../../components/CampaignFilterButtons";
import { useEffect } from "react";
import { getCampaigns } from "../../api/api";
import { useState } from "react";
// import PreviewIcon from "@mui/icons-material/Preview";

//TODO replace data grid 💤 with cards that are sortable 👏 🔥
export const CampaignsTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getCampaigns()
      .then((d) => {
        console.log("getCampaigns retrieved");
        if (searchParams) {
          setRows(
            d.filter((row) => {
              row.status === searchParams;
            })
          );
        } else {
          console.log(d);
          setRows(d);
        }
        setLoading(false);
      })
      .catch((err) => {
        //TODO handle error sign posting to user
        console.error(err);
      });
  }, [searchParams]);

  // const columnsLg = [
  //   { field: "id", headerName: "id", width: 200 },
  //   { field: "campaignTitle", headerName: "Title", width: 200 },
  //   { field: "campaignDescription", headerName: "Description", width: 330 },
  //   { field: "productTitle", headerName: "Produt Title", width: 230 },
  //   {
  //     field: "created",
  //     headerName: "Creation Date",
  //     width: 200,
  //     type: "dateTime",
  //   },
  //   {
  //     field: "actions",
  //     headerName: "Actions",
  //     type: "actions",
  //     getActions: (params) => [
  //       <GridActionsCellItem
  //         icon={<PreviewIcon />}
  //         label="View Campaign"
  //         onClick={() => nav(params.id)}
  //         key={params.id}
  //         showInMenu
  //       />,
  //     ],
  //   },
  // ];

  if (loading === true) {
    return <Box>Loading...{loading}</Box>;
  }
  false && console.log(searchParams);
  return (
    <Fragment>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Typography fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}>
          All Campaigns
        </Typography>
        <Button variant="contained" color="primary" onClick={() => nav("new")}>
          Create New Campaing
        </Button>
      </Stack>
      <Stack direction="row">
        <CampaignFilterButtons
          values={["Active", "Draft", "Closed"]}
          setSearchParams={setSearchParams}
        />
      </Stack>
      {rows.map((row, index) => (
        <Card key={index} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {row.campaignTitle}
            </Typography>
            <Typography variant="h5" component="div">
              {row.campaignDescription}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {row.productTitle}
            </Typography>
            <Typography variant="body2">{row.productDescription}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
          </CardActions>
        </Card>
      ))}
    </Fragment>
  );
};
