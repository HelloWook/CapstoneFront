import { legacy_createStore as createStore } from "redux";
import authReducer from "../reducers/authReducer";

const store = createStore(authReducer);

export default store;
