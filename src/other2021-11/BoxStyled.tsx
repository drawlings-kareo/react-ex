import React from "react";
import { Button, Box, IconButton } from "@material-ui/core";
import { Delete as DeleteIcon, Alarm as AlarmIcon } from "@material-ui/icons";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";

import { green, blueGrey } from "@material-ui/core/colors";

import ConfirmationDialog from "./ConfirmationDialog";

const theme = createTheme({
  palette: {
    primary: green,
    secondary: blueGrey,
  },
});

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  buttonSmaller: {
    width: "10px",
    color: "black",
  },
  button: {
    display: "none",
    "&:hover": {
      display: "block",
    },
  },
  iconButton: {
    backgroundColor: "black",
    color: "orange",
  },
}));

// CONFIRMATION DIALOG
/*function ConfirmationDialog(props: any) {
  const { onClose, open } = props;

  const handleCancel = () => {
    onClose(false);
  };

  const handleOk = () => {
    onClose(true);
  };

  return (
    <Dialog maxWidth="xs" open={open}>
      <DialogTitle>Are You Sure?</DialogTitle>
      <DialogContent dividers>Content</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}*/
// CONFIRMATION DIALOG

export default function BoxStyled() {
  const classes = useStyles();

  const [confirmationDailogOpen, setConfirmationDailogOpen] = React.useState(false);

  function deleteSomething() {
    setConfirmationDailogOpen(true);
    console.log("deleteSomething()");
  }

  const confirmationDialogHandleClose = (confirm: Boolean) => {
    setConfirmationDailogOpen(false);

    if (confirm) {
      console.log("CONFIRMED");
    } else {
      console.log("NOT CONFIRMED");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="space-evenly" border="1px solid black">
        <Box bgcolor="primary.main" width={100} height={100} border="1px solid black">
          <Button className={classes.buttonSmaller} variant="contained" startIcon={<DeleteIcon />}></Button>
          <Button color="secondary" variant="contained" startIcon={<AlarmIcon />}></Button>
        </Box>
        <Box bgcolor="primary.main" width={100} height={100} border="1px solid black">
          <IconButton className="classes.iconButton">
            <DeleteIcon className="classes.iconButton" />
          </IconButton>
          <IconButton>
            <AlarmIcon />
          </IconButton>
        </Box>
        <Box
          bgcolor="primary.main"
          width={100}
          height={100}
          border="1px solid black"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box bgcolor="secondary.main" width={20} height={20} border="1px solid black"></Box>
          <Box bgcolor="secondary.main" width={20} height={20} border="1px solid black"></Box>
        </Box>
        <Box className={classes.box} width={100} height={100} border="1px solid black">
          <Box
            width={20}
            height={20}
            bgcolor="primary.main"
            position="relative"
            top="80px"
            left="80px"
            border="1px solid black"
          ></Box>
        </Box>
      </Box>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={() => deleteSomething()}
      ></Button>
      <IconButton onClick={() => deleteSomething()}>
        <DeleteIcon />
      </IconButton>
      <ConfirmationDialog open={confirmationDailogOpen} onClose={confirmationDialogHandleClose} />
    </ThemeProvider>
  );
}
