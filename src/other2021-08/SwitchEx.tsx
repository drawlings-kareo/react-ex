import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";

export default function SwitchEx() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch name="gilad" checked />} label="Gilad Gray" />
    </FormGroup>
  );
}
