import React, { Component } from "react";
import Datepicker from "./components/Datepicker";

class App extends Component {
  render() {
    return (
      <div className="w-25 py-5 my-5 mx-auto" style={{ minWidth: "50%" }}>
        <Datepicker label="Due Date" value={new Date()} />
      </div>
    );
  }
}

export default App;
