import { connect } from "react-redux";
import history from "./history";
// import cityReducer from "./cityReducer";

function mapStoreToProps(store) {
  return {
    history: store.city.history
  };
}

export default connect(mapStoreToProps)(history);
