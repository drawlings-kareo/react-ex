import React, { memo, useEffect } from "react";

export default function UseCallbackEx() {
  /*const f = () => {
    return 1;
  };*/

  const fMemo = React.useCallback(() => {
    return 1;
  }, []);

  /*let fMemoCopy;
  if (fMemoCopy !== fMemo) {
    console.log("fMemo changed");
    fMemoCopy = fMemo;
  }

  let fCopy;
  if (fCopy !== f) {
    console.log("f changed");
    fCopy = f;
  }*/

  const [value, setValue] = React.useState(10);

  return (
    <div>
      <MyBubbles f={fMemo} />
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        {value}
      </button>
      <MyComponent />
    </div>
  );
}

interface MyBubblesProps {
  f: () => {};
}

const MyBubbles = /*memo(*/ (props: MyBubblesProps) => {
  let { f } = props;

  useEffect(() => {
    console.log("f changed");
  }, [f]);

  return <div>He likes bubbles</div>;
}; /*)*/

const MyComponentMemo = memo(MyComponent);

function MyComponent() {
  console.log("rendering MyComponent");
  return <div>MyComponent</div>;
}
