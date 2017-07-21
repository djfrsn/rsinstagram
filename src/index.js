import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { postsReducer } from 'containers/posts';
import RSInstagram from 'components/rsinstagram';
import Home from 'components/home';

let store = createStore(postsReducer);

// TODO: add https://www.npmjs.com/package/babel-plugin-transform-imports to this 4over/4over-cart
// TODO: setup prod webpack config - https://survivejs.com/webpack/developing/composing-configuration/
// with above..enableb tree shaking https://survivejs.com/webpack/optimizing/tree-shaking/
const start = App => {
  render(
    <Provider store={store}>
      <App>
        <Home />
      </App>
    </Provider>,
    document.getElementById('root')
  );
};

start(RSInstagram);

// Enable HMR - update our components and reducer on hot updates
if (module.hot) {
  module.hot.accept(
    ['components/rsinstagram', 'components/home', 'containers/posts'],
    () => {
      store.replaceReducer(postsReducer);
      start(RSInstagram);
    }
  );
}
