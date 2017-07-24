import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from 'reducer';
import sagas from 'sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    compose(applyMiddleware(thunk), applyMiddleware(sagaMiddleware))
  );

  if (module.hot) {
    module.hot.accept('reducer', () => {
      store.replaceReducer(require('./reducer').default);
    });
  }

  sagaMiddleware.run(sagas);

  return store;
};
