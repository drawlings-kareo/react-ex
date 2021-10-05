import { Select, MenuItem } from "@material-ui/core";
import { ChangeEvent, useState } from "react";

export type DropdownProps = {
  onChange?: Function;
  list: Array<Array<any>>;
};

const Dropdown = (props: DropdownProps) => {
  const [value, setValue] = useState(props.list[0][0]);

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as number);
    if (!!props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <Select value={value} onChange={handleChange}>
      {props.list.map((item) => (
        <MenuItem value={item[0]}>{item[1]}</MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
