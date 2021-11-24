import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Search from "./Search";
import ImageList from "./ImageList";

import { unsplash } from "../api/APIUtils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  async onFormSubmit(term) {
    try {
      const response = await unsplash.get("/search/photos", {
        params: { query: term },
      });
      this.setState({ images: response.data.results });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <CssBaseline />
        {/* pass the callback function ... if we call this cb in search through props the this on cb function point to this of search 
          for resolve this we must either use arrow function or bind this of app class */}
        <Search onSubmit={this.onFormSubmit} />
        <p>Number Of Images : {this.state.images.length}</p>
        <ImageList images={this.state.images} />
      </>
    );
  }
}

export default App;
