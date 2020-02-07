import axios from "axios";

export function updateSearch(SearchEntry) {
  return {
    type: "UPDATE_SEARCH",
    payload: {
      SearchEntry
    }
  };
}

export function searchGo(SearchEntry) {
  const OPEN_WEATHER_API_KEY = "351f8bae60e13f8d108e87c26fb0449a";
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${SearchEntry}&?units=metric&APPID=${OPEN_WEATHER_API_KEY}`;
  return {
    type: "GO",
    payload: axios.get(url)
  };
}
