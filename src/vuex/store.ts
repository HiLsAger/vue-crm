import { createStore } from "vuex";

export interface toastsInterface {
  type: string;
  title: string;
  message: string;
  timer: number;
  maxTimer: number;
  show: boolean;
}

export default createStore({
  state: {
    toasts: [
      // {
      //   type: "danger",
      //   title: "Error",
      //   message: "Hello world",
      //   timer: 5000,
      // },
    ] as toastsInterface[],
  },
  mutations: {
    addToast(state, toast: toastsInterface) {
      toast.timer = 3000;
      toast.maxTimer = 3000;
      toast.show = true;
      state.toasts.push(toast);
    },
    updateToast(
      state,
      { toast, index }: { toast: toastsInterface; index: number }
    ) {
      state.toasts[index] = toast;
      if (state.toasts[index].timer <= 0) {
        state.toasts[index].show = false;
      }
    },
    closeToast(state, index: number) {
      state.toasts[index].show = false;
    },
  },
  actions: {
    addToast({ commit }, toast: toastsInterface) {
      commit("addToast", toast);
    },
    updateToast(
      { commit },
      payload: { toast: toastsInterface; index: number }
    ) {
      commit("updateToast", payload);
    },
    closeToast({ commit }, index: number) {
      commit("closeToast", index);
    },
  },
  getters: {
    toasts: (state) => state.toasts,
  },
});
