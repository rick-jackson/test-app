import { FC } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";

const Snackbar: FC<{ message: string }> = ({ message }) => {
  return (
    <MuiSnackbar open={!!message} autoHideDuration={1000} message={message} />
  );
};

export default Snackbar;
