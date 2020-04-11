import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps: ", prevProps);
    console.log("PrevState: ", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get new data from server
    }
  }
  componentWillUnmount() {
    // Will be called just before component be removed from DOM
    console.log("Component will be unmounted");
    // Best place to perform cleanup & dispose operations
  }
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
