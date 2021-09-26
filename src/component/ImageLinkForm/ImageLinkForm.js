import React from "react";

import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ma4 pt5">
      <p className="pa3">
        {"This magic brain will detect faces in your picture, Give it a try"}
      </p>
      <div className="pa4 br3 shadow-5 form">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 pointer link ph3 pv2 dib white bg-light-purple"
          onClick={onButtonSubmit}
        >
          {"Detect"}
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
