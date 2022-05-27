import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import { Add } from "@mui/icons-material";

function createData(title, description, prod_title, created, protein) {
  return { title, description, prod_title, created, protein };
}

const rowsActive = [
  createData(
    "Shoe Campaign",
    "Ea deserunt magna ipsum quis et amet tempor deserunt consectetur aliquip.",
    "Pariatur id consequat",
    new Date("December 17, 1995 03:24:00").toString(),
    4.0
  ),
  createData(
    "Plastic Campaign",
    "Quis eiusmod Lorem anim duis nostrud non esse aliqua sunt id.",
    "Sint",
    new Date().toString(),
    4.3
  ),
  createData(
    "Hero Campaign",
    "Ullamco aliquip ex amet sunt deserunt amet.",
    "Sunt laborum Lorem",
    new Date(628021800000).toString(),
    6.0
  ),
  createData(
    "Students",
    "Pariatur officia in occaecat consequat. Enim nulla in ullamco cupidatat proident.",
    "Ut ipsum est ad tempor ",
    new Date(1995, 11, 17).toString(),
    4.3
  ),
  createData(
    "New customers",
    "Elit culpa minim dolore deserunt do. Sit reprehenderit amet esse enim cillum incididunt sit ut adipisicing enim mollit.",
    "Aliquip veniam ",
    new Date("December 17, 1995 03:24:00").toString(),
    3.9
  ),
];

const rowsClosed = [
  createData("Completed campaign", 159, 6.0, 24, 4.0),
  createData("Campaign completed", 237, 9.0, 37, 4.3),
  createData("Campign closed", 262, 16.0, 24, 6.0),
];

const rowsDraft = [
  createData("Draft Campaign", 159, 6.0, 24, 4.0),
  createData("Easter Campaign", 237, 9.0, 37, 4.3),
];

export default function Campaigns() {
  const [activeFilter, setActiveFilter] = useState("active");
  const [activeRowData, setActiveRowData] = useState(rowsActive);

  return (
    <div className="campaignsContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        <div style={{ marginTop: "5px" }}>
          {/* TODO: swap to mui breadcrump component */}
          <HomeIcon color="disabled" />{" "}
          <p
            style={{
              display: "inline",
              position: "relative",
              bottom: "5px",
              fontWeight: "600",
              color: "var(--disabled-color)",
            }}
          >
            {"> "}
            Campaigns
          </p>
        </div>

        <div style={{}}>
          <div style={{}}>
            <Button startIcon={<Add />} variant="contained">
              Create New Campaign
            </Button>
          </div>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            color={activeFilter === "active" ? "primary" : "disabled"}
            onClick={() => {
              setActiveFilter("active");
              setActiveRowData(rowsActive);
            }}
          >
            Active
          </Button>
          <Button
            color={activeFilter === "closed" ? "primary" : "disabled"}
            onClick={() => {
              setActiveFilter("closed");
              setActiveRowData(rowsClosed);
            }}
          >
            Closed
          </Button>
          <Button
            color={activeFilter === "draft" ? "primary" : "disabled"}
            onClick={() => {
              setActiveFilter("draft");
              setActiveRowData(rowsDraft);
            }}
          >
            Draft
          </Button>
        </ButtonGroup>
      </Box>
      <div className="campaignsTable">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Product Title</TableCell>
                <TableCell align="right">Created</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activeRowData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.prod_title}</TableCell>
                  <TableCell align="right">{row.created}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
