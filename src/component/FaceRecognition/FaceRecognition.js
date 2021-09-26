import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ box, imageUrl }) => {
  return (
    <div className="main-container">
      <div className="sub-container">
        {imageUrl !== "" && (
          <img id="inputimage" width="500px" src={imageUrl} alt="area" />
        )}
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
