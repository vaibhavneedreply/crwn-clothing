import { all, call } from 'redux-saga/effects';

import { fetchCollectionsAsync } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';
import { shopSagas } from './shop/shop.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
 yield all([
  call(fetchCollectionsAsync),
  call(userSagas),
  call(cartSagas),
  call(shopSagas)
 ]);
}