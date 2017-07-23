export function postsReducer(state = { hello: 'ok' }, action) {
  switch (action.type) {
    case 'FETCH_POST':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
