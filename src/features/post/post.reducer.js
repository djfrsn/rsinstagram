import {
  LIKE_POST,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  POST_COMMENT,
  POST_COMMENT_VALUE_CHANGE
} from './post.action.types';

export const initialState = {
  posts: [],
  postCommentInputValue: ''
};

const newPosts = (state, action) => {
  return { ...state, posts: action.payload.posts };
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_POST:
      return newPosts(state, action);
    case POST_COMMENT:
      return newPosts(state, action);
    case POST_COMMENT_VALUE_CHANGE:
      return {
        ...state,
        postCommentInputValue: action.payload.postCommentInputValue
      };
    case FETCH_POST:
      return state;
    case FETCH_POST_SUCCESS:
      return newPosts(state, action);
    default:
      return state;
  }
}
