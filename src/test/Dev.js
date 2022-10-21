import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box } from "@mui/material";
import { proposals } from "../api/data";

export const Dev = () => {
  const text = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <Box display="flex" flex={1}>
      <Box sx={{ flex: "1 0 100%" }}>
        {proposals.map((p) => (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              maxWidth: "600px",
              alignItems: "center",
              padding: "15px",
              marginBottom: "10px",
              marginRight: "20px",
            }}
            key={p.title}
          >
            <div style={{ whiteSpace: "nowrap", marginRight: "20px" }}>
              <Avatar src={p.image} />
            </div>
            <div
              style={{
                minWidth: "100px",
                overflow: "hidden",
                flexGrow: 1,
                marginRight: "20px",
              }}
            >
              <div style={text}>{p.title}</div>
              <div style={text}>{p.name}</div>
            </div>
            <div>
              <MoreVertIcon />
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
};
