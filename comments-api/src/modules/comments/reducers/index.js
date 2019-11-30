import { FETCH_COMMENTS_RESOLVED } from "./../constants";

const iniState = {
  comments: []
};

const commentsReducer = (state = iniState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_RESOLVED:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
};

export default commentsReducer;
