import React, { Component } from "react";
import NavBar from "./components/navbar";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ],
    imageURL: "https://picsum.photos/200"
  };
  constructor() {
    super();
    console.log("hello app");
    //this.state=this.props.something;
  }
  componentDidMount() {
    //Ajax Calls
    //this.setState
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters]; //clone counters object using '...'
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    //console.log("event handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.reduce(
            (total, c) => total + c.value,
            0
          )} // filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            imageURL={this.state.imageURL}
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
