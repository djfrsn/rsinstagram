import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS } from './posts.action.types';

// worker Saga: will be fired on FETCH_POSTS actions
function* fetchPost(action) {
  try {
    const posts = yield call(fetch, { params: 'something' });
    debugger;
    yield put({ type: 'FETCH_POSTS_SUCCESS', posts });
  } catch (e) {
    yield put({ type: 'FETCH_POSTS_FAILUIRE', message: e.message });
  }
}

/*
  Starts fetchPost on each dispatched `FETCH_POSTS` action.
*/
export function* postsSaga() {
  yield takeEvery(FETCH_POSTS, fetchPost);
}
