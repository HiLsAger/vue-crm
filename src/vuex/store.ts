import { createStore } from "vuex";

export interface toastsInterface {
  type: string;
  title: string;
  message: string;
}

export default createStore({
  state: {
    toasts: [
      {
        type: "danger",
        title: "Error",
        message: "Hello world",
      },
    ] as toastsInterface[],
  },
  mutations: {
    addToast(state, toast: toastsInterface) {
      state.toasts.push(toast);
    },
    closeToast(state, index: number) {
      state.toasts.splice(index, 1);
    },
  },
  actions: {
    addToast({ commit }, toast: toastsInterface) {
      commit("addToast", toast);
    },
    closeToast({ commit }, index: number) {
      commit("closeToast", index);
    },
  },
  getters: {
    toasts: (state) => state.toasts,
  },
});
