import { FETCH_POSTS } from './posts.action.types';

export function fetchPost(data) {
  return dispatch => {
    dispatch({
      type: FETCH_POSTS,
      payload: { some: 'data' }
    });
  };
}
