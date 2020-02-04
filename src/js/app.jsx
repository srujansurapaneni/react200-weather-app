import React from "react";

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
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon2">
              Go!
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="card ">
              <div className="card-header bg-info">City Information</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Tokyo</li>
                  <br />
                  <div className="row">
                    <div className="col">Temperature (F)</div>
                    <div className="col">Pressure</div>
                    <div className="col">Humidity</div>
                  </div>
                  <div className="row">
                    <div className="col">X (F)</div>
                    <div className="col">X psi</div>
                    <div className="col">X</div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">Lowest Temp (F)</div>
                    <div className="col">Highest Temp (F)</div>
                    <div className="col">Wind Speed</div>
                  </div>
                  <div className="row">
                    <div className="col">LT (F)</div>
                    <div className="col">HT (F)</div>
                    <div className="col">WS</div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card">
              <div className="card-header bg-info">Search History</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">San Diego</div>
                    <div className="col">San Diego Date</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">New York</div>
                    <div className="col">New York Date</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Washington D.C</div>
                    <div className="col">Washington D.C Date</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">London</div>
                    <div className="col">London Date</div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">Tokyo</div>
                    <div className="col">Tokyo Date</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
