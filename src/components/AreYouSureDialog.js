import { Box, Button, Modal, Typography } from "@mui/material";
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
export default function AreYouSureDialog({
  header,
  description,
  open,
  close,
  cancel,
  action,
}) {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-check-reject-modal-title"
      aria-describedby="modal-check-reject-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-check-reject-modal-title"
          variant="h6"
          component="h2"
        >
          {header}
        </Typography>
        <Typography id="modal-check-rejectmodal-description" sx={{ mt: 2 }}>
          {description}
        </Typography>
        <Button onClick={cancel}>No</Button>
        <Button onClick={action}>Yes</Button>
      </Box>
    </Modal>
  );
}
