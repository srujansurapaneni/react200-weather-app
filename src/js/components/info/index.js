import { connect } from "react-redux";
import info from "./info";
// import cityReducer from "./cityReducer";

function mapStoreToProps(store) {
  return {
    city: store.city
  };
}

export default connect(mapStoreToProps)(info);
