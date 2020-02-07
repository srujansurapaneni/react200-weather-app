import { connect } from "react-redux";
import history from "./history";
// import cityReducer from "./cityReducer";

function mapStoreToProps(store) {
  return {
    city: store.city
  };
}

export default connect(mapStoreToProps)(history);
