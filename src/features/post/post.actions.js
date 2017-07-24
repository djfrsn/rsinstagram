import { FETCH_POST } from './post.action.types';

export function fetchPost(payload) {
  return dispatch => {
    dispatch({
      type: FETCH_POST,
      payload: { posts_url: payload.post_url }
    });
  };
}
