import React from "react";

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { history } = this.props;
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header bg-info">Search History</div>
          <div className="card-body">
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">
                  <div className="col text-md-left">San Diego</div>
                  <div className="col text-md-right">San Diego Date</div>
                </div>
                <div>
                  <div className="col text-sm-right">Small Date</div>
                </div>
              </div>
              <div className="list-group-item">
                <div className="row">
                  <div className="col text-md-left">New York</div>
                  <div className="col text-md-right">New York Date</div>
                </div>
                <div>
                  <div className="col text-sm-right">Small Date</div>
                </div>
              </div>
              <div className="list-group-item">
                <div className="row">
                  <div className="col text-md-left">Washington D.C</div>
                  <div className="col text-md-right">Washington D.C Date</div>
                </div>
                <div>
                  <div className="col text-sm-right">Small Date</div>
                </div>
              </div>
              <div className="list-group-item">
                <div className="row">
                  <div className="col text-md-left">London</div>
                  <div className="col text-md-right">London Date</div>
                </div>
                <div>
                  <div className="col text-sm-right">Small Date</div>
                </div>
              </div>
              <div className="list-group-item">
                <div className="row">
                  <div className="col text-md-left">Tokyo</div>
                  <div className="col text-md-right">Tokyo Date</div>
                </div>
                <div>
                  <div className="col text-sm-right">Small Date</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
