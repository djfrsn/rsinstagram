import { all, call } from 'redux-saga/effects';
import { postSaga } from 'features/post';

export default function* rootSaga() {
  yield all([call(postSaga)]);
}
