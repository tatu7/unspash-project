import React from "react";
import ImgCard from "./ImgCard";
import "./style.css";
function ImageList(props) {
  const renderImg = () => {
    return props.dataImage.map((val) => {
      return <ImgCard key={val.id} data={val} />;
    });
  };
  return <div className="img-list">{renderImg()}</div>;
}

export default ImageList;
