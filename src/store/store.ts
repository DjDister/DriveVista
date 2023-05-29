import {
  createStore,
  MutationTree,
  Store as VuexStore,
  CommitOptions,
  createLogger,
  // @ts-ignore
} from "vuex";

//declare state
export type State = { isLoggedIn: boolean; uid: string; email: string };

//set state

const state: State = {
  isLoggedIn: false,
  uid: "",
  email: "",
};

// mutations enums

export enum MutationTypes {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

// Mutation Types
export type Mutations<S = State> = {
  [MutationTypes.LOG_IN](
    state: S,
    payload: { uid: string; email: string }
  ): void;
  [MutationTypes.LOG_OUT](state: S): void;
};

// define mutations
const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.LOG_IN](
    state: State,
    payload: { uid: string; email: string }
  ) {
    state.email = payload.email;
    state.uid = payload.uid;
    state.isLoggedIn = true;
  },
  [MutationTypes.LOG_OUT](state: State) {
    state.email = "";
    state.uid = "";
    state.isLoggedIn = false;
  },
};

//setup store type
export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & { state: State } & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

export const store = createStore({
  state,
  mutations,
  plugins: [createLogger()],
});

function saveStoreToLocalStorage() {
  localStorage.setItem("store", JSON.stringify(store.state));
}

function loadStoreFromLocalStorage() {
  const storedState = localStorage.getItem("store");
  if (storedState) {
    store.replaceState(JSON.parse(storedState));
  }
}

store.subscribe(() => {
  saveStoreToLocalStorage();
});

loadStoreFromLocalStorage();

export function useStore() {
  return store as Store;
}
