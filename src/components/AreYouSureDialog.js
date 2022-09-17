import { Box, Button, Modal } from "@mui/material";
import React from "react";
import HeaderAndValue from "./HeaderAndValue";
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
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <HeaderAndValue header={header} value={description} />
        <Button onClick={cancel}>No</Button>
        <Button onClick={action}>Yes</Button>
      </Box>
    </Modal>
  );
}
