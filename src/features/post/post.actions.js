import { FETCH_POST, LIKE_POST } from './post.action.types';
import find from 'lodash.find';
import without from 'lodash.without';

export function fetchPost(payload) {
  return dispatch => {
    dispatch({
      type: FETCH_POST,
      payload: { posts_url: payload.post_url }
    });
  };
}

export function likePost(payload) {
  return (dispatch, getState) => {
    const { post } = getState();
    const currPosts = post.posts;
    const currPost = find(post.posts, { id: Number(payload.id) });
    const isLiked = currPost.user_likes;
    const likes = isLiked ? currPost.likes - 1 : currPost.likes + 1;
    const newPost = { ...currPost, user_likes: !isLiked, likes };
    const newPosts = without(currPosts, currPost);
    dispatch({
      type: LIKE_POST,
      payload: { posts: newPosts.concat(newPost) }
    });
  };
}
