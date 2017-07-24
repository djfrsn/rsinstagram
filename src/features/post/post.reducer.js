import { LIKE_POST, FETCH_POST, FETCH_POST_SUCCESS } from './post.action.types';

export const initialState = {
  posts: []
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case LIKE_POST:
      return { ...state, posts: action.payload.posts };
    case FETCH_POST:
      return state;
    case FETCH_POST_SUCCESS:
      return { ...state, posts: action.payload.posts };
    default:
      return state;
  }
}
