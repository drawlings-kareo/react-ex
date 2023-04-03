import { useState } from "react";

export default function WhenPropsChangeEx() {
  const [value, setValue] = useState<number>(5);

  function handleClick() {
    setValue(value + 1);
  }

  console.log("WhenPropsChangeEx rendering");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <MangoDisplay mango={value} />
    </div>
  );
}

function MangoDisplay(props: any) {
  console.log("MangoDisplay rendering");
  return <div>{props.mango}</div>;
}
