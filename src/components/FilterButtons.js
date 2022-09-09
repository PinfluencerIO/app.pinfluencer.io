import {
  Tooltip,
  ListItem,
  Stack,
  Divider,
  ListItemText,
  Grid,
  ListItemButton,
  ListItemIcon,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function FilterButtons({
  data,
  filters,
  searchParams,
  setSearchParams,
  filterKey,
}) {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("md"));

  const counts = {};
  filters.forEach((filter) => (counts[filter.label] = 0));

  data.forEach((item) => {
    counts[item[filterKey].toLowerCase()]++;
  });
  return (
    <Grid container item>
      <Grid item>
        {!smScreen && (
          <Typography sx={{ ml: "5px" }} variant="span">
            Filters:
          </Typography>
        )}
        <Tooltip title="Filter Results" placement="top" arrow>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            {filters.map((i) => (
              <ListItem
                key={i.label}
                disablePadding
                onClick={(event) => {
                  const filter = event.target.parentNode.dataset.filter;
                  setSearchParams({ filter });
                }}
              >
                {smScreen && (
                  <ListItemButton
                    sx={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {i.icon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        whiteSpace: "nowrap",
                        textTransform: "capitalize",
                        ml: "-24px",
                      }}
                      primary={i.label + ` (${counts[i.label]})`}
                      primaryTypographyProps={getColor(i.label)}
                    />
                  </ListItemButton>
                )}
                {!smScreen && (
                  <ListItemButton
                    sx={{
                      display: { xs: "block", md: "none" },
                      fontSize: "40",
                    }}
                  >
                    <ListItemIcon sx={{ fontSize: "40" }}>
                      {i.icon}
                      <Typography sx={{ ml: "5px", color: "blue" }}>
                        ({counts[i.label]})
                      </Typography>
                    </ListItemIcon>
                  </ListItemButton>
                )}
              </ListItem>

              // <ListItem
              //   data-filter={i.label}
              //   button
              //   onClick={(event) => {
              //     const filter = event.target.parentNode.dataset.filter;
              //     setSearchParams({ filter });
              //   }}
              //   key={i}
              // >
              //   <ListItemText
              //     data-filter={i.label}
              //     sx={{
              //       my: 0,
              //       whiteSpace: "nowrap",
              //       textTransform: "capitalize",
              //     }}
              //     primary={i.label + ` (${counts[i.label]})`}
              //     primaryTypographyProps={getColor(i.label)}
              //   />
              // </ListItem>
            ))}
          </Stack>
        </Tooltip>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );

  function getColor(i) {
    return {
      color: searchParams.get("filter") == i ? "primary" : "black",
    };
  }
}
