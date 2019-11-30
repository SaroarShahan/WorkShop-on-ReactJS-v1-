import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CommentsContainer from "./modules/comments/containers/CommentsContainer";

function App() {
  return (
    <Provider store={store}>
      <CommentsContainer />
    </Provider>
  );
}

export default App;
