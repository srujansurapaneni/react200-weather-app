import React from "react";

export default class CityInput extends React.Component {
  render() {
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-info">
            San Diego
          </button>
          <button type="button" className="btn btn-info">
            New York
          </button>
          <button type="button" className="btn btn-info">
            Washington D.C
          </button>
          <button type="button" className="btn btn-info">
            London
          </button>
          <button type="button" className="btn btn-info">
            Tokyo
          </button>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              Go!
            </span>
          </div>
        </div>
      </div>
    );
  }
}
