import ShopActionTypes from "./shop.types";
import { firestore, covertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchColletionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchColletionSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchColletionFailure = errorMesage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMesage
});

export const fetchColletionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchColletionStart());

    collectionRef
      .get()
      .then(snapshot=> {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchColletionSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchColletionFailure(error.message)));
  } 
};

