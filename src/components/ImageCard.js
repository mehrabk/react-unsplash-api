import { ImageListItem } from "@mui/material";
import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.setSpans = this.setSpans.bind(this);
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans() {
    console.log(this.imageRef.current.clientHeight);
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <ImageListItem>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </ImageListItem>
    );
  }
}

export default ImageCard;
