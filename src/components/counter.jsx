import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this); //Arrow function binds this keyword

    this.setState({ count: this.state.count + 1 }); // Equals to this.state.count++;
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags.</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgedClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
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
