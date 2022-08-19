import {
  Tooltip,
  ListItem,
  Stack,
  Divider,
  ListItemText,
  Grid,
} from "@mui/material";

export default function FilterButtons({
  data,
  filterNames,
  searchParams,
  setSearchParams,
  filterKey,
}) {
  const counts = {};
  filterNames.forEach((filter) => (counts[filter] = 0));

  data.forEach((item) => {
    counts[item[filterKey].toLowerCase()]++;
  });

  console.log("Counts", counts);

  return (
    <Grid container item>
      <Grid item>
        <Tooltip title="Filter Results" placement="top" arrow>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            {filterNames.map((i) => (
              <ListItem
                data-filter={i}
                button
                onClick={(event) => {
                  const filter = event.target.parentNode.dataset.filter;
                  setSearchParams({ filter });
                }}
                key={i.id}
              >
                <ListItemText
                  data-filter={i}
                  sx={{
                    my: 0,
                    whiteSpace: "nowrap",
                    textTransform: "capitalize",
                  }}
                  primary={i + ` (${counts[i]})`}
                  primaryTypographyProps={getColor(i)}
                />
              </ListItem>
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
