import React from "react";

/*function Scoreboard(props) {
    return <div>1-0</div>
}*/

class Scoreboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {x: props.x}
    }

    componentDidMount() {
        this.state.x = "def";
    }

    render() {
        return <div>{this.state.x}</div>
    }
}

export default Scoreboard;