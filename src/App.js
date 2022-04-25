import axios from "axios";
import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = { kalit: "" };
  searchOl = (data) => {
    this.setState({ kalit: data });
  };
  getImage = async () => {
    let data = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.kalit,
      },
      headers: {
        Authorization: "Client-ID j7yQkpWqHqAryVHxn8L3BBAkV4UraHMosXYC500qQ60",
      },
    });
  };
  componentDidUpdate() {
    this.getImage();
  }
  render() {
    return (
      <div>
        <SearchBar searchOl={this.searchOl} />
      </div>
    );
  }
}
export default App;
