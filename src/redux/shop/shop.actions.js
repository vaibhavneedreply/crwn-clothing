import ShopActionTypes from "./shop.types";

export const updateColletion = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap
});