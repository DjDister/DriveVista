import { Store } from "vuex";
import { InjectionKey } from "vue";
import { State } from "./store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

declare module "vuex" {
  export function useStore(key?: InjectionKey<Store<State>>): Store<State>;
}
