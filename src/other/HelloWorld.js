import React from "react";
import HelloHelper from "./HelloHelper";

/*function HelloWorld(props) {
    return <div>hello world!! {props.x}</div>
}*/

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: props.x };
  }

  render() {
    // return <div>hello world {this.state.x}</div>;
    return (
      <div>
        <HelloHelper i={this.state.x} />
        <HelloHelper i="myownparam" />
        <HelloHelper i={this.state.x + 1} />
      </div>
    );
  }
}

let v = 5;

export { HelloWorld, v };
