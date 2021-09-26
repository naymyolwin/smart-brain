import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="ma5">
      {imageUrl === "" ? null : (
        <img className="w-50" src={imageUrl} alt="arae" />
      )}
    </div>
  );
};

export default FaceRecognition;
