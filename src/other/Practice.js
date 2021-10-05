import React from "react";

/*function Practice(props) {
    return (
        <div>
            <h1>Practice</h1>
            <div>This is practice</div>
            <div>{props.x}</div>
        </div>
    );
}*/

export default class Practice extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Practice</h1>
                <div>This is practice</div>
                <div>More practice</div>
                <div>{this.props.x}</div>
                <div>{this.props.y}</div>
            </div>
        )
    }
}