import axios from "axios";
import React, { Component } from "react";
import ImageList from "./Components/ImageList";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = { arr: [] };
  searchOl = async (data) => {
    let malumot = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: data,
        per_page: 15,
      },
      headers: {
        Authorization: "Client-ID j7yQkpWqHqAryVHxn8L3BBAkV4UraHMosXYC500qQ60",
      },
    });
    this.setState({ arr: malumot.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar searchOl={this.searchOl} />
        <ImageList dataImage={this.state.arr} />
      </div>
    );
  }
}
export default App;
