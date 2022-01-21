import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { fetchColletionFailure, fetchColletionSuccess } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(covertCollectionsSnapshotToMap, snapshot);
    yield put(fetchColletionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchColletionFailure(error.message));
  }
}

export function* fetchColletionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START, 
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([
    call(fetchColletionsStart)
  ])
}

