import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-sagas';

import rootReducer from './root-reducer';

const sageMiddleware = createSagaMiddleware();

const middlewares = [sageMiddleware];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sageMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };