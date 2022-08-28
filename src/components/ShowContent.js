import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ShowContent({ show, setShow, content }) {
  return (
    <Modal
      open={show}
      onClose={setShow}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Content created
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Details of where this content can be found outside of Pinfluencer
        </Typography>
        <img src={content} alt="Created content" />
      </Box>
    </Modal>
  );
}
