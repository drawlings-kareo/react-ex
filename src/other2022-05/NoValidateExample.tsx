import React from "react";
import { TextField, Button, Dialog, DialogContent, DialogActions } from "@material-ui/core";

export default function NoValidateExmaple() {
  const [home, setHome] = React.useState<string>("home");
  const [away, setAway] = React.useState<string>("");

  function handleOnSubmit() {
    // console.log("checkValid:", checkValid());
    console.log("here");
  }

  return (
    <>
      <Dialog open={true}>
        <form onSubmit={handleOnSubmit} noValidate>
          <DialogContent>
            <TextField value={home} onChange={(event) => setHome(event.target.value)} required />
            <TextField value={away} onChange={(event) => setAway(event.target.value)} required />
          </DialogContent>
          <DialogActions>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

/*
      <Button onClick={() => console.log(handleOnSubmit)}>submit</Button>*/

/*function InnerComponent() {
  const [home, setHome] = React.useState<string>("");
    const [away, setAway] = React.useState<string>("default text");

  return (
    <div>
      <TextField value={home} onChange={(event) => setHome(event.target.value)} />
      <TextField value={away} onChange={(event) => setAway(event.target.value)} />
    </div>
  );
}*/

/*function checkValid() {
  return home === "home" && away === "away";
}*/
