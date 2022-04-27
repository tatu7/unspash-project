import axios from "axios";
import React, { Component } from "react";
import Buttons from "./Components/Buttons";
import ImageList from "./Components/ImageList";
import SearchBar from "./Components/SearchBar";

class App extends Component {
  state = { arr: [], search: "", page: 1 };
  searchOl = async (data, pg = 1) => {
    if (pg) {
      this.setState({ page: pg });
      this.setState({ search: data });
    }
    let malumot = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: this.state.search,
        per_page: 15,
        page: pg,
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
        <Buttons
          page={this.state.page}
          search={this.state.search}
          uzgar={this.searchOl}
        />
        <ImageList dataImage={this.state.arr} />
      </div>
    );
  }
}
export default App;
