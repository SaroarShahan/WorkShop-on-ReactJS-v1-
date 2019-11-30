import axios from "axios";

import {
  FETCH_COMMENTS_PENDING,
  FETCH_COMMENTS_RESOLVED,
  FETCH_COMMENTS_FAILED
} from "./../constants";

export const getAllComents = () => dispatch => {
  const api = "https://jsonplaceholder.typicode.com/comments";

  dispatch({ type: FETCH_COMMENTS_PENDING, api });

  return axios
    .get(api)
    .then(res => {
      dispatch({ type: FETCH_COMMENTS_RESOLVED, payload: res.data });
      return res;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_COMMENTS_FAILED, payload: "failed" });
    });
};
