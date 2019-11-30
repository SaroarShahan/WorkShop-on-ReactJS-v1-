import { combineReducers } from "redux";
import commentsReducer from "../modules/comments/reducers";

const rootReducers = combineReducers({
  comments: commentsReducer
});

export default rootReducers;
