import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { listings } from "../../api/data";
import { BackLink } from "../../presentation/BackLink";

export const ProposalEditPanel = ({ title, children }) => {
  const nav = useNavigate();
  const submit = () => {
    const index = listings.findIndex((x) => x.id === data.id);
    if (index !== -1) {
      listings[index] = data;
      nav(-1);
    }
  };
  const params = useParams();

  const listing = listings.filter((p) => {
    return p.id === params.id;
  })[0];

  const [data, setData] = React.useState(listing);

  const handleChange = (event, key) => {
    if (!event.target) {
      setData((currentState) => {
        const items = currentState[key];
        if (items.includes(event)) {
          var filtered = items.filter(function (value) {
            return value !== event;
          });
          return {
            ...currentState,
            [key]: filtered,
          };
        }
        return {
          ...currentState,
          [key]: items.concat(event),
        };
      });
      return;
    }
    setData((currentState) => {
      return { ...currentState, [event.target.name]: event.target.value };
    });
  };

  return (
    <Stack rowGap={3} mx={1}>
      <BackLink />
      <Typography variant="h5">{title}</Typography>
      {children(data, handleChange)}
      <Button variant="outlined" onClick={submit} sx={{ width: "fit-content" }}>
        Submit
      </Button>
    </Stack>
  );
};
