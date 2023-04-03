import React from "react";

export default class ClassComponentEx extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return <div>hello world</div>;
  }
}
