import React from "react";

export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { weatherData } = this.props;
    return (
      <div className="col-6">
        <div className="card ">
          <div className="card-header bg-info ">City Information</div>
          <div className="card-body">
            <div className="jumbotron">
              <h1 className="display-6 text-center">{weatherData.name}</h1>
              <p className="lead text-center">
                Lat/Long: {weatherData.coord.lat},{weatherData.coord.lon}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <br />
              <div className="row">
                <div className="col text-center font-weight-bold">
                  Temperature (F)
                </div>
                <div className="col text-center font-weight-bold">Pressure</div>
                <div className="col text-center font-weight-bold">Humidity</div>
              </div>
              <div className="row">
                <div className="col text-center text-success">
                  {weatherData.main.temp}F
                </div>
                <div className="col text-center text-success">
                  {weatherData.main.pressure}
                </div>
                <div className="col text-center text-success">
                  {weatherData.main.humidity}%
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col text-center font-weight-bold">
                  Lowest Temp (F)
                </div>
                <div className="col text-center font-weight-bold">
                  Highest Temp (F)
                </div>
                <div className="col text-center font-weight-bold">
                  Wind Speed
                </div>
              </div>
              <div className="row">
                <div className="col text-center text-success">
                  {weatherData.main.temp_min}
                </div>
                <div className="col text-center text-success">
                  {weatherData.main.temp_max}
                </div>
                <div className="col text-center text-success">
                  {weatherData.wind.speed}mph
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
