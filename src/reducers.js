import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { postsReducer } from 'containers/posts';

export default combineReducers({
  post: postsReducer,
  routing: routerReducer
});
