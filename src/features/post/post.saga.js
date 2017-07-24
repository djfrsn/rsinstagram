import { call, put, takeEvery } from 'redux-saga/effects';
import request from 'utils/request';
import {
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILUIRE
} from './post.action.types';

// worker Saga: will be fired on FETCH_POST actions
function* fetchPost(action) {
  try {
    const response = yield call(request, action.payload.posts_url);
    yield put({ type: FETCH_POST_SUCCESS, posts: response.posts });
  } catch (e) {
    yield put({ type: FETCH_POST_FAILUIRE, message: e.message });
  }
}

/*
* Starts fetchPosts on each dispatched `FETCH_POST` action.
*/
export function* postSaga() {
  yield takeEvery(FETCH_POST, fetchPost);
}
