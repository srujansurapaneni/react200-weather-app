import React from "react";

export default class History extends React.Component {
  render() {
    return (
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
    );
  }
}
