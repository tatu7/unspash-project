import React, { Component } from "react";
import "./style.css";
class SearchBar extends Component {
  state = { kalitSuz: "" };
  changeHundle(evt) {
    this.setState({ kalitSuz: evt.target.value });
  }
  submitHandler = (evt) => {
    evt.preventDefault();
    this.props.searchOl(this.state.kalitSuz);
  };
  render() {
    return (
      <div>
        <div
          className="ui category search container "
          style={{ marginTop: "10px" }}
        >
          <form
            onSubmit={this.submitHandler}
            className="ui icon input"
            style={{ width: "100%" }}
          >
            <input
              onChange={(evt) => this.changeHundle(evt)}
              className="prompt "
              type="text"
              placeholder="Search images..."
            />
            <i className="search icon" />
          </form>
          <div className="results" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
