import React from "react";

export default class Info extends React.Component {
  render() {
    return (
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
    );
  }
}
