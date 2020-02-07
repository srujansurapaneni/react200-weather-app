import { combineReducers } from "redux";
import CityReducer from "./components/cityInput/cityReducer";

const rootReducer = combineReducers({
  city: CityReducer
});

export default rootReducer;
