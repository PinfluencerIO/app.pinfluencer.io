import { Button, Divider } from "@mui/material";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";

export default function CampaignFilterButtons({ values, setSearchParams }) {
  const location = useLocation();
  return (
    <Fragment>
      {values.map((i) => (
        <Button
          color={
            location.search
              .toLowerCase()
              .includes(i.replace(" ", "").toLowerCase())
              ? "primary"
              : "black"
          }
          onClick={(event) => {
            const filter = event.target.innerText.replace(" ", "");
            if (!location.search.toLowerCase().endsWith(filter.toLowerCase())) {
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
          {i}
        </Button>
      ))}
      <Divider />
    </Fragment>
  );
}
