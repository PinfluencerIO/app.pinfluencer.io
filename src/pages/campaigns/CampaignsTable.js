import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import React, { Fragment } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CampaignFilterButtons from "../../components/CampaignFilterButtons";
import { useEffect } from "react";
import { getCampaigns } from "../../api/api";
import { useState } from "react";
import PreviewIcon from "@mui/icons-material/Preview";

//TODO replace data grid 💤 with cards that are sortable 👏 🔥
export const CampaignsTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  false && console.log(searchParams);
  const nav = useNavigate();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    getCampaigns()
      .then((d) => setRows(d))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const columnsLg = [
    { field: "id", headerName: "id", width: 200 },
    { field: "campaignTitle", headerName: "Title", width: 200 },
    { field: "campaignDescription", headerName: "Description", width: 330 },
    { field: "productTitle", headerName: "Produt Title", width: 230 },
    {
      field: "created",
      headerName: "Creation Date",
      width: 200,
      type: "dateTime",
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<PreviewIcon />}
          label="View Campaign"
          onClick={() => nav(params.id)}
          key={params.id}
          showInMenu
        />,
      ],
    },
  ];

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
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columnsLg}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
        />
      </Box>
    </Fragment>
  );
};
