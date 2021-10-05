import React from "react";

export default function ControlledComponentTest() {
  const [value, setValue] = React.useState<number>(3);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
  }

  return <ComA value={value} onChange={handleChange} buttonText={"yo a button"} />;
}

interface ComAProps {
  value?: number;
  buttonText?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function ComA(props: ComAProps) {
  const [value, setValue] = React.useState<number>(props.value ? props.value : 0);
  const ref: any = React.useRef(); // a pointless ref just because I'm learning that too

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(parseInt(event.target.value));
    if (!!props.onChange) {
      props.onChange(event);
    }
  }

  function handleClick() {
    alert("value:" + value + ", ref: " + ref.current.value);
  }

  return (
    <>
      <label>ControlledComponentTest</label>
      <input type="number" value={value} onChange={handleChange} ref={ref} />
      <button onClick={handleClick}>{props.buttonText}</button>
    </>
  );
}
