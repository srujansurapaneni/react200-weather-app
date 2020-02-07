import React from "react";
import CityInput from "./components/cityInput";
import Info from "./components/info/info";
import History from "./components/history/history";

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="alert alert-dark" role="alert">
          <br />
          <h1>Origin Weather Application</h1>
          <h6>Always know if you need an umbrella!</h6>
        </div>
        <CityInput />
        <div className="row">
          <Info />
          <History />
        </div>
      </div>
    );
  }
}
