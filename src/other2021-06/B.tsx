import React, { FunctionComponent } from "react";
import C, { CProps } from "./C";

const props: CProps = { x: 1, y: "y", f: () => console.log("hello world") };

const B: FunctionComponent = () => {
  return <C {...props} />;
};

export default B;
