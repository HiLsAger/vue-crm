import self_intefrace from "@/utility/interfaces/SelfInterface";
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
    toasts: [] as toastsInterface[],
    self: null as self_intefrace | null,
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
    setSelf(state, self: self_intefrace) {
      state.self = self;
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
    setSelf({ commit }, self: self_intefrace) {
      commit("setSelf", self);
    },
  },
  getters: {
    toasts: (state) => state.toasts,
    self: (state) => state.self,
  },
});
