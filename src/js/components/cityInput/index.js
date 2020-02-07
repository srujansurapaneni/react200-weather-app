import { connect } from "react-redux";
import cityInput from "./cityInput";
// import cityReducer from "./cityReducer";

function mapStoreToProps(store) {
  return {
    city: store.city
  };
}

export default connect(mapStoreToProps)(cityInput);
