import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Stack,
  Tab,
  Tabs,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getCampaigns } from "../../api/api";
import HeaderAndValue from "../../components/HeaderAndValue";
import { ImgOrBlank } from "../../components/ImgOrBlank";
import { TopActions } from "../../components/v2/TopActions";

const filters = ["all", "active", "draft", "closed"];
export const CampaignsTable = () => {
  const theme = useTheme();

  const isSmall = useMediaQuery("(max-width:625px)");
  const isXSmall = useMediaQuery("(max-width:560px)");

  const [rows, setRows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [value, setValue] = React.useState(0);

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

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    console.log("Fired!");
    const filter = event.target.dataset.filter;
    if (filter === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ filter });
    }
    setValue(newValue);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <TopActions>
          <Button
            variant="contained"
            onClick={() => nav("new")}
            sx={{
              bottom: isXSmall ? 3 : -3,
              top: isXSmall ? 3 : -3,
            }}
          >
            {buttonLabel()}
          </Button>
        </TopActions>
      </Box>
      <Box
        sx={{
          borderBottom: isXSmall ? 0 : 1,
          borderColor: "divider",
          flexDirection: isXSmall ? "column" : "row",
          display: "flex",
          justifyContent: isXSmall ? "flex-start" : "space-between",
          mb: 3,
          pb: 0,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {filters.map((f) => (
            <Tab
              key={f}
              label={f}
              {...a11yProps(f)}
              data-filter={f}
              sx={{
                "&.Mui-selected ": {
                  color: theme.palette.active.main,
                  fontWeight: "900",
                  borderColor: theme.palette.active.main,
                },
                minWidth: isSmall ? 63 : 90,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <Grid container spacing={3}>
        {rows.length === 0 ? emptyRows() : populatedRows()}
      </Grid>
    </Box>
  );
  function buttonLabel() {
    if (isSmall) return "New Campaign";
    return "Create New Campaign";
  }
  function emptyRows() {
    return (
      <Grid item>
        <Card elevation={3} sx={{ width: 333 }}>
          <CardContent>
            <HeaderAndValue
              header="No campaigns"
              value="Try a different filter or create a new campaign"
            />
          </CardContent>
        </Card>
      </Grid>
    );
  }

  function populatedRows() {
    return rows.map((row) => (
      <Grid item key={row.id}>
        <Card elevation={3} sx={{ width: 333 }}>
          <CardContent>
            <Stack spacing={3}>
              <HeaderAndValue
                header={row.campaignTitle}
                value={row.campaignDescription}
              />
              <HeaderAndValue
                header={row.productTitle}
                value={row.productDescription}
              />
              <ImgOrBlank
                imageSrc={row.productImage1}
                altLabel="Product 1"
                width="150px"
                height="150px"
              />
            </Stack>
          </CardContent>
          <CardActions sx={{ ml: "8px", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => nav(row.id)}
            >
              View
            </Button>
            <Chip
              label={row.campaignState}
              sx={{
                border: "1px solid ",
              }}
            />
          </CardActions>
        </Card>
      </Grid>
    ));
  }
};
