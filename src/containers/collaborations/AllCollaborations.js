import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Avatar, Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { collaborations as data, influencers, listings } from "../../api/data";
import { CollaborationsStateCounts } from "../../presentation/CollaborationsStateCounts";

export const AllCollaborations = () => {
  const [collaborations, setCollaborations] = React.useState([]);
  let [searchParams] = useSearchParams();
  React.useEffect(() => {
    setCollaborations(
      data.filter((c) => {
        let filter = searchParams.get("filter");
        if (filter) {
          return c.state.toLowerCase() === filter;
        }

        return c;
      })
    );
  }, [searchParams]);

  const handleClick = (c) => {
    console.log(c);
  };

  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <CollaborationsStateCounts
        pb={1}
        collaborations={data}
        queryType
        active={searchParams.get("filter")}
      />
      {collaborations
        .sort((a, b) => {
          if (a.state < b.state) return -1;
          if (a.state > b.state) return 1;
          return 0;
        })
        .map((c) => {
          const influencer = influencers.find((i) => i.id === c.influencer);
          const listing = listings.find((l) => l.id === c.listing);

          return (
            <React.Fragment key={c.id}>
              <Box
                display="flex"
                gap={3}
                pb={1}
                justifyItems="center"
                alignItems="center"
                border={0}
              >
                <Avatar
                  src={influencer.image}
                  title={`${influencer.givenName} ${influencer.familyName}`}
                />
                <Box
                  border={0}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  flexGrow={1}
                >
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {listing.title}
                  </Typography>
                  <Typography
                    sx={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {listing.name}
                  </Typography>
                </Box>

                <IconButton onClick={() => handleClick(c)}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                gap={2}
                pb={2}
                justifyContent="flex-end"
              >
                <Typography>
                  {listing.listingMonth} {listing.listingYear}
                </Typography>
                <Box
                  sx={{
                    textTransform: "lowercase",
                    "&::first-letter": { textTransform: "capitalize" },
                  }}
                >
                  {c.state}
                </Box>
              </Box>
            </React.Fragment>
          );
        })}
    </Paper>
  );
};

/* 
id: uuid(),
    listing: listing.id,
    state: randomSelection(COLLABORATION_STATES, 1),
    application: {
      details: faker.random.words(faker.random.numeric(2)),
      posts: faker.random.numeric(1),
      reels: faker.random.numeric(1, {
        bannedDigits: ["4", "5", "6", "7", "8", "9"],
      }),
    },
    influencer: influencer.id,
*/
