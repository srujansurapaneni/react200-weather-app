import React from "react";
import { updateSearch, searchGo } from "./cityActions";

export default class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchEntry = this.handleSearchEntry.bind(this);
    this.handleGo = this.handleGo.bind(this);
    this.citySearch = this.citySearch.bind(this);
  }

  citySearch(e) {
    const { dispatch } = this.props;
    dispatch(searchGo(e.target.name));
  }

  handleSearchEntry(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearch(value));
  }

  handleGo() {
    const { city, dispatch } = this.props;
    dispatch(searchGo(city.SearchEntry));
  }

  render() {
    const { SearchEntry } = this.props;
    return (
      <div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            name="San Diego"
            type="button"
            className="btn btn-info"
            onClick={this.citySearch}
          >
            San Diego
          </button>
          <button
            name="New York"
            type="button"
            className="btn btn-info"
            onClick={this.citySearch}
          >
            New York
          </button>
          <button
            name="Washington D.C"
            type="button"
            className="btn btn-info"
            onClick={this.citySearch}
          >
            Washington D.C
          </button>
          <button
            name="London"
            type="button"
            className="btn btn-info"
            onClick={this.citySearch}
          >
            London
          </button>
          <button
            name="Tokyo"
            type="button"
            className="btn btn-info"
            onClick={this.citySearch}
          >
            Tokyo
          </button>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            aria-describedby="basic-addon2"
            value={SearchEntry}
            onChange={this.handleSearchEntry}
          />
          <div className="input-group-append">
            <span
              className="input-group-text"
              id="basic-addon2"
              type="button"
              onClick={this.handleGo}
            >
              Go!
            </span>
          </div>
        </div>
      </div>
    );
  }
}
