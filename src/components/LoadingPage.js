import React, { Component } from "react";

class LoadingPage extends Component {
  render() {
    return (
      <div className="loader">
        <img className="loader__image" src="/images/loader.gif"></img>
      </div>
    );
  }
}

export default LoadingPage;
