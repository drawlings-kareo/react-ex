import React, { FunctionComponent } from "react";

type CPropsAll = { x: number; y?: string; z: number; f: () => void };

export type CProps = Pick<CPropsAll, "x" | "y" | "f">;

const C: FunctionComponent<CProps> = (props: CProps) => {
  return <button onClick={props.f}>{props.x + "" + props.y}</button>;
};

C.defaultProps = { y: "d" };

C.displayName = "C display";

export default C;
