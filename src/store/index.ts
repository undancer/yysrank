import { history, search } from "@/store/mutations";
import initialState, { AppState } from "@/store/states";
import { createStore } from "vuex";

const store = createStore<AppState>({
  state: initialState,
  mutations: {
    search,
    history
    // RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION // this mutation **MUST** be named "RESTORE_MUTATION"
  }
  // plugins: [vuexLocal.plugin]
});

export default store;
