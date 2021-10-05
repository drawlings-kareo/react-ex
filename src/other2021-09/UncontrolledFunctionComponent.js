import React from "react";

export default function UncontrolledFunctionComponent() {
  const input = React.createRef();

  function handleSubmit() {
    alert("A name was submitted: " + input.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
