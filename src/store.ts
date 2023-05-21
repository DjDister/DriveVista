// @ts-ignore
import { createStore } from "vuex";

export type State = { isLoggedIn: boolean };

const state: State = { isLoggedIn: false };

export type Store = { state: State };

export const store = createStore({
  state,
});

export function useStore() {
  return store as Store;
}
