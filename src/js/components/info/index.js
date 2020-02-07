import { connect } from "react-redux";
import info from "./info";
// import cityReducer from "./cityReducer";

function mapStoreToProps(store) {
  return {
    weatherData: store.city.weatherData
  };
}

export default connect(mapStoreToProps)(info);
