import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onReset, counters, imageURL } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            imageURL={imageURL}
            onDelete={onDelete}
            onIncrement={onIncrement}
            /*  value={counter.value}
            id={counter.id} */
            counter={counter}
          />
          /* <h4>Counter # {counter.id}</h4> */
          /* </Counter> */
        ))}
      </div>
    );
  }
}

export default Counters;
