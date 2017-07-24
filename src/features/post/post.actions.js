import {
  FETCH_POST,
  LIKE_POST,
  POST_COMMENT,
  POST_COMMENT_VALUE_CHANGE
} from './post.action.types';
import find from 'lodash.find';
import without from 'lodash.without';
import uuid from 'utils/uuid';

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
    const currPost = find(currPosts, { id: Number(payload.id) });
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

// Keep track of comment page inputvalue in redux store
export function updatePostCommentInputValue(text) {
  return (dispatch, getState) => {
    dispatch({
      type: POST_COMMENT_VALUE_CHANGE,
      payload: { postCommentInputValue: text }
    });
  };
}

export function postComment(payload) {
  return (dispatch, getState) => {
    const { post } = getState();
    const id = payload.id;
    const currPosts = post.posts;
    const currPost = find(currPosts, { id: Number(id) });
    const newPosts = without(currPosts, currPost);
    const newComment = {
      id: uuid(),
      name: 'John Doe',
      comment: post.postCommentInputValue
    };
    const newPost = {
      ...currPost,
      comments: currPost.comments.concat(newComment)
    };

    dispatch({
      type: POST_COMMENT,
      payload: { posts: newPosts.concat(newPost) }
    });
    // Clear input text
    dispatch({
      type: POST_COMMENT_VALUE_CHANGE,
      payload: { postCommentInputValue: '' }
    });
  };
}
