import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_POSTS } from './posts.action.types';

// worker Saga: will be fired on FETCH_POSTS actions
function* fetchPosts(action) {
  try {
    const posts = yield call(request, '/json/posts.json');
    yield put({ type: 'FETCH_POSTS_SUCCESS', posts });
  } catch (e) {
    yield put({ type: 'FETCH_POSTS_FAILUIRE', message: e.message });
  }
}

/*
* Starts fetchPosts on each dispatched `FETCH_POSTS` action.
*/
export function* postsSaga() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}
