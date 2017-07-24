import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { postReducer } from 'features/post';

export default combineReducers({
  post: postReducer,
  routing: routerReducer
});
