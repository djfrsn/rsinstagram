import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import getStore from 'store';
import RSInstagram from 'components/app';
import Post from 'components/post';
import Comments from 'components/Comments';

// Config
import { COMMENTS_PATH } from 'config';

const store = getStore();
const history = syncHistoryWithStore(browserHistory, store);
const ROOT_NODE = document.getElementById('root');

// TODO: add https://www.npmjs.com/package/babel-plugin-transform-imports to this 4over/4over-cart
// TODO: setup prod webpack config - https://survivejs.com/webpack/developing/composing-configuration/
// with above..enableb tree shaking https://survivejs.com/webpack/optimizing/tree-shaking/
const start = App => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Post} />
          <Route path={COMMENTS_PATH} component={Comments} />
        </Route>
      </Router>
    </Provider>,
    ROOT_NODE
  );
};

start(RSInstagram);

// Enable HMR - update our components and reducer on hot updates
if (module.hot) {
  module.hot.accept(['components/app', 'components/post'], () => {
    unmountComponentAtNode(ROOT_NODE); // clean up event listeners/handlers
    start(RSInstagram);
  });
}
