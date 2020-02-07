import React from "react";

export default class Info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const { weatherData } = this.props;
    const weatherData = {
      name: "New York",
      coord: { lon: -0.13, lat: 51.51 },
      main: {
        temp: 274.08,
        feels_like: 268.86,
        temp_min: 271.48,
        temp_max: 276.15,
        pressure: 1023,
        humidity: 93,
        visibility: 2700
      },
      wind: { speed: 4.6, deg: 90 },
      weather: [{ id: 721, main: "Haze", description: "haze", icon: "50n" }]
    };

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
