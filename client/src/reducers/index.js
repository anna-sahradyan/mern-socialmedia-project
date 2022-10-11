import { combineReducers } from "redux";
import posts from "./postReducers";
import auth from "./authReducer";

export default combineReducers({
  posts,
  auth,
});
