import { FETCH_POST, FETCH_POST_SUCCESS } from './post.action.types';

export const initialState = {
  posts: []
};

export function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return state;
    case FETCH_POST_SUCCESS:
      return { ...state, posts: action.posts };
    default:
      return state;
  }
}
