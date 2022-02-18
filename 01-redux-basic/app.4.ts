import { createStore, Store } from "redux";
import { incrementAction, multiplyAction } from "./counter/counter.actions";
import { counterReducer } from "./counter/counter.reducer";

const store: Store = createStore(counterReducer);

store.subscribe(() => {
  console.log(`Subscribe data: ${store.getState()}`);
});

store.dispatch(incrementAction);

store.dispatch(incrementAction);

store.dispatch(incrementAction);

store.dispatch(multiplyAction);
