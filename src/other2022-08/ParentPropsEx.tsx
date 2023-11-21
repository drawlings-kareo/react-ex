import React, { useEffect, useState, memo } from "react";
import { Box, Button, Dialog, TextField, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [otherValue, setOtherValue] = useState<number>(8);

  function handleOpenDialog() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (value: number) => {
    setOpen(false);
    setValue(value);
  };

  console.log("Page rendering");
  return (
    <Box>
      <Box>The value is {value}</Box>
      <Box>The other value is {otherValue}</Box>
      <Box>
        <Button onClick={() => setValue(value + 1)}>Increase</Button>
        <Button onClick={() => setOtherValue(otherValue + 1)}>Increase Other</Button>
        <Button onClick={handleOpenDialog}>Open Dialog</Button>
      </Box>
      <MyDialog open={open} handleClose={handleClose} handleSubmit={handleSubmit} value={value} />
    </Box>
  );
}

const MyDialog = memo((props: any) => {
  const [value, setValue] = useState<number>(props.value);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  console.log("MyDialog rendering");
  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <TextField autoFocus value={value} label="Value" fullWidth onChange={handleValueChange} />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.handleClose();
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            props.handleSubmit(value);
          }}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
});
