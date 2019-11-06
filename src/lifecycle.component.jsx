import React from "react";

export class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called!");
  }

  componentDidMount() {
    console.log("Component Mounted!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ComponentShouldMount!!");
    if (this.props.text === nextProps.text) return false;
    else {
      return true;
    }
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate!!");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount!!");
  }
  render() {
    console.log("Render called");
    return (
      <div>
        <h1>Life Cycles Component</h1>
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}
