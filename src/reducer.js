import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { postsReducer } from 'features/posts';

export default combineReducers({
  post: postsReducer,
  routing: routerReducer
});
