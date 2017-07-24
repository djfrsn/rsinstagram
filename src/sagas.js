import { all, call } from 'redux-saga/effects';
import { postsSaga } from 'features/posts';

export default function* rootSaga() {
  yield all([call(postsSaga)]);
}
