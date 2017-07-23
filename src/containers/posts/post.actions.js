export function fetchPost(data) {
  return dispatch => {
    dispatch({
      type: 'FETCH_POST',
      payload: { some: 'data' }
    });
  };
}
