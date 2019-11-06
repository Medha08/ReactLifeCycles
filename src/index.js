import React from "react";
import ReactDOM from "react-dom";

import { Lifecycle } from "./lifecycle.component";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      text: " ",
      message: " "
    };
  }

  handleHide = () => {
    this.setState(
      state => {
        return { showChild: !state.showChild };
      },
      () => {
        console.log(this.state.showChild);
      }
    );
  };

  componentWillUnmount() {
    console.log("ComponentWillUnmount!!");
  }

  render() {
    return (
      <div className="App">
        {this.state.message}
        <button onClick={this.handleHide}>Toggle Lifecycle</button>
        <br />
        <br />
        <button
          onClick={() => {
            this.setState(state => {
              return { message: state.message + "Medha" };
            });
          }}
        >
          Message
        </button>

        <button
          onClick={() => {
            this.setState(state => {
              return { text: state.text + "_hello" };
            });
          }}
        >
          Update Text
        </button>
        {this.state.showChild ? <Lifecycle text={this.state.text} /> : null}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
