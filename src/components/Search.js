import React from "react";
import { Button, Container, TextField } from "@mui/material";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  // state can use out of constructor
  state = { term: "" };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <div>
          <form onSubmit={this.onFormSubmit} className="d-flex ">
            <TextField
              onChange={this.onInputChange}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              fullWidth
              value={this.state.term}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default Search;
