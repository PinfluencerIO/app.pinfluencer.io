import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getBrand, updateBrand } from "../../api/brandApi";

export const ProfileEditPanel = ({ title, children }) => {
  const nav = useNavigate();

  const [data, setData] = React.useState();

  useEffect(() => {
    getBrand().then((brand) => setData(brand));
  }, []);

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
    updateBrand(data).then(() => nav("/profile"));
  };

  if (!data) return "loading...";

  return (
    <Stack rowGap={3} width="100%" mt={-5}>
      <Box display="flex" flexDirection="row">
        <Link
          underline="none"
          onClick={() => {
            nav("/profile");
          }}
          sx={{ marginLeft: -1 }}
        >
          ⬅
        </Link>
        <Typography ml={2}>{title}</Typography>
      </Box>
      {children(data, handleChange)}
      <Button variant="outlined" onClick={submit}>
        Submit
      </Button>
    </Stack>
  );
};
