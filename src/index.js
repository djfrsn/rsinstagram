import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { commentsReducer } from "./containers/comments";
import App from "./components/App";

let store = createStore(commentsReducer);

// TODO: setup eslint - https://survivejs.com/webpack/developing/linting/
// TODO: add https://www.npmjs.com/package/babel-plugin-transform-imports to this 4over/4over-cart
// TODO: setup prod webpack config - https://survivejs.com/webpack/developing/composing-configuration/
// with above..enable tree shaking https://survivejs.com/webpack/optimizing/tree-shaking/
const start = App => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

start(App);

// Enable HMR - update our components and reducer on hot updates
if (module.hot) {
  module.hot.accept(["./components/App", "./containers/comments"], () => {
    store.replaceReducer(commentsReducer);
    start(App);
  });
}
