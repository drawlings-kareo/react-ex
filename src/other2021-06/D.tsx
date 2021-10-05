import React from "react";

export default class D extends React.Component<DProps> {
  render() {
    return <button>{this.props.x}</button>;
  }
}

export interface DProps {
  x: number;
}
