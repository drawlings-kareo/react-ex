import React from "react";

export default function UseEffectTest() {
  const [valueA, setValueA] = React.useState(1000);

  console.log("rendering UseEffectTest");

  return (
    <>
      <button onClick={() => setValueA(valueA + 1)}>{valueA}</button>
      <Com />
      <SimpleCom />
    </>
  );
}

function Com() {
  const [valueA, setValueA] = React.useState(100);
  const [valueB, setValueB] = React.useState(110);

  let x = 0;

  // React.useEffect(() => {
  x = valueA + 100;
  // });

  console.log("rendering Com");
  return (
    <>
      <button onClick={() => setValueA(valueA + 1)}>{valueA}</button>
      <button onClick={() => setValueB(valueB + 1)}>{valueB}</button>
      <div>{x}</div>
    </>
  );
}

function SimpleCom() {
  console.log("rending SimpleCom");
  return <div>display</div>;
}

/*import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
*/
