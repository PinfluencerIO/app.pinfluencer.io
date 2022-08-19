import { Tooltip, ListItem, Stack, Divider, ListItemText } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function CampaignFilterButtons({ values, setSearchParams }) {
  const location = useLocation();
  return (
    <Tooltip title="Filter Results" placement="top" arrow>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        {values.map((i) => (
          <ListItem
            button
            onClick={(event) => {
              const filter = event.target.innerText
                .replace(" ", "")
                .substring(0, event.target.innerText.indexOf(" (")); //todo this is a side effect outside of the this function. fix me
              if (
                !location.search.toLowerCase().endsWith(filter.toLowerCase())
              ) {
                console.log(
                  `${location.search.toLowerCase()} endsWith ${filter.toLowerCase()}`
                );
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
            key={i}
          >
            <ListItemText
              sx={{ my: 0, whiteSpace: "nowrap" }}
              primary={i}
              primaryTypographyProps={getColor(i)}
            />
          </ListItem>
        ))}
      </Stack>
    </Tooltip>
  );

  function getColor(i) {
    return {
      color: location.search
        .toLowerCase()
        .endsWith(i.substring(0, i.indexOf(" (")).toLowerCase())
        ? "primary"
        : "black",
    };
  }
}
