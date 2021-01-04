import { combineReducers } from "redux";
import posts from "./postsReducer";
import comments from "./commentsReducer";
import auth from "./authReducer";
const rootReducer = combineReducers({
  posts,
  comments,
  auth,
});
export default rootReducer;
