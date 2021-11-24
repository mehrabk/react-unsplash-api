import React from "react";
import * as mui from "@mui/material";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => <ImageCard key={image.id} image={image} />);
  return (
    <mui.Box sx={{ height: 450, overflowY: "none" }}>
      <mui.ImageList variant="masonry" cols={3} gap={8}>
        {images}
      </mui.ImageList>
    </mui.Box>
  );
};

export default ImageList;
