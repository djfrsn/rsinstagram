import { FETCH_POSTS } from './posts.action.types';

export function postsReducer(state = { hello: 'ok' }, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
