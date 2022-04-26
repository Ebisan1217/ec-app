import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserReducer } from "../users/reducers";
import { connectRouter, routerMiddleware } from "connected-react-router";

export default function myCreateStore(history) {
  return createStore(
    combineReducers({
      router: connectRouter(history),
      users: UserReducer,
    }),
    applyMiddleware(routerMiddleware(history))
  );
}
