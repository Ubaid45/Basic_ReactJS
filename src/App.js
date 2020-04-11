import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import './App.css';

class App extends Component{
  constructor(){
    super();
    console.log("App - constructor");
  }
  state = {
  counters: [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ],
};
componentDidMount(){
  console.log("App - mounted");
}
handleIncrement = (counter) => {
  const counters = [...this.state.counters]; // clone
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value++; // directly modify counter object defined in state
  //console.log(this.state.counters[0]);
  this.setState({ counters });
};

handleDelete = (counterId) => {
  const counters = this.state.counters.filter((c) => c.id !== counterId);
  this.setState({ counters });
};

handleReset = () => {
  const counters = this.state.counters.map((c) => {
    c.value = 0;
    return c;
  });
  this.setState({ counters });
};

render(){
  console.log("App - rendered");
  return ( 
    <React.Fragment>
      <Navbar totalCount = {this.state.counters.filter(m => m.value > 0).length} />
      <main className="container">
        <Counters 
          counters = {this.state.counters}
          onDelete = {this.handleDelete}
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}/>
      </main>
    </React.Fragment>
  );
  }
}

export default App;