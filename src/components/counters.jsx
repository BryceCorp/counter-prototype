import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn m-2"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
