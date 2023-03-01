import { FC } from "react";
import { Backdrop as MuiBackdrop, CircularProgress } from "@mui/material";

const Backdrop: FC<{ open: boolean }> = ({ open }) => {
  return (
    <MuiBackdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </MuiBackdrop>
  );
};

export default Backdrop;
