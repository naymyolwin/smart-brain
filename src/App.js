import React from "react";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import Logo from "./component/Logo/Logo";
import ImageLinkForm from "./component/ImageLinkForm/ImageLinkForm";
import Rank from "./component/Rank/Rank";

import Particles from "react-particles-js";
import FaceRecognition from "./component/FaceRecognition/FaceRecognition";
import Clarifai from "clarifai";
import Signin from "./component/Signin/Signin";
import Register from "./component/Register/Register";
//const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: "0a217a97e96f422297940127a682eb97",
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box: {},
      route: "signin",
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box: box });
  };

  onButtonSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });

    app.models
      .predict("f76196b43bbd45c99b4f3cd8e8b40a8a", this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : this.state.route === "register" ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : (
          <>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition
              box={this.state.box}
              imageUrl={this.state.imageUrl}
            />
          </>
        )}
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default App;
