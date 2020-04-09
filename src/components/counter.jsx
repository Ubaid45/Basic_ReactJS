import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgedClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  getBadgedClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
