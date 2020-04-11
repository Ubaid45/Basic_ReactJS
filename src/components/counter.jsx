import React, { Component } from "react";
class Counter extends Component {
  
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  render() {
    console.log("Counter - rendered");
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgedClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.OnIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgedClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
