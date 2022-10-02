import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getBrand } from "../../api/brandApi";
import { BrandDescription } from "../../components/displayTypes/BrandDescription";
import { BrandDetails } from "../../components/displayTypes/BrandDetails";
import { BrandHeader } from "../../components/displayTypes/BrandHeader";
import { BrandLogo } from "../../components/displayTypes/BrandLogo";
import { Categories } from "../../components/displayTypes/Categories";
import { Values } from "../../components/displayTypes/Values";
import { YourDetails } from "../../components/displayTypes/YourDetails";

export const Profile = () => {
  const nav = useNavigate();
  const [data, setData] = React.useState();
  useEffect(() => {
    getBrand().then((brand) => setData(brand));
  }, []);

  if (!data) return "Loading...";

  const ProfileCard = ({ title, children }) => {
    return (
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Stack
          direction="row"
          justifyContent="space-between"
          onClick={() => nav("edit/" + title.replace(/\s/g, "").toLowerCase())}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }} fontWeight="900">
            {">"}
          </Typography>
        </Stack>
        <Box>{children}</Box>
      </Paper>
    );
  };
  return (
    <Stack width="100%" rowGap={3}>
      <ProfileCard title="Your Details">
        <YourDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Brand Details">
        <BrandDetails data={data} view />
      </ProfileCard>

      <ProfileCard title="Brand Description">
        <BrandDescription data={data} view />
      </ProfileCard>

      <ProfileCard title="Brand Logo">
        <BrandLogo data={data} id="logo" view />
      </ProfileCard>

      <ProfileCard title="Brand Header">
        <BrandHeader data={data} id="headerImage" view />
      </ProfileCard>

      <ProfileCard title="Values">
        <Values data={data} view />
      </ProfileCard>

      <ProfileCard title="Categories">
        <Categories data={data} view />
      </ProfileCard>
    </Stack>
  );
};
