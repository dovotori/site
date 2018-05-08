/* global window */
import { createStore } from "redux";
import rootReducer from "../reducers/index";

export default function configureStore() {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  if (module.hot) {
    module.hot.accept("../reducers/index", () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
