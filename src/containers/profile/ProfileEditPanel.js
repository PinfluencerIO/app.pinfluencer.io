import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getBrand, updateBrand } from "../../api/brandApi";
import { getInfluencer, updateInfluencer } from "../../api/influencerApi";
import { BackLink } from "../../presentation/BackLink";
import { typeSwitch } from "./typeSwitch";

export const ProfileEditPanel = ({ title, type, children }) => {
  const nav = useNavigate();

  const [data, setData] = React.useState();

  useEffect(() => {
    const api = typeSwitch(type, getBrand, getInfluencer);
    api().then((u) => setData(u));
  }, [type]);

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

  const submit = () => {
    const update = typeSwitch(type, updateBrand, updateInfluencer);
    update(data).then(() => nav("/profile"));
  };

  if (!data) return "loading...";

  return (
    <Stack rowGap={3} width="100%" mt={-5}>
      <BackLink />
      <Typography variant="h5">{title}</Typography>
      {children(data, handleChange)}
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
    </Stack>
  );
};
