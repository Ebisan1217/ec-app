import { createStore, combineReducers } from "redux";
import { UserReducer } from "../users/reducers";

export default function myCreateStore() {
  return createStore(
    combineReducers({
      users: UserReducer,
      //products: ProductsReducer
      // ....
      // ....
    })
  );
}
