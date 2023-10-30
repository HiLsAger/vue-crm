<template>
  <div class="toaster">
    <div class="toast" v-for="(toast, index) in toasts" :key="index">
      <div class="toast-header">
        <span>
          <i v-if="toast.type" :class="['bi', getIconClass(toast.type)]"></i>
          {{ toast.title }}
        </span>
        <button class="close-toast" @click="closeToast(index)">
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="toast-content">{{ toast.message }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { toastsInterface } from "@/vuex/store";
import { Vue } from "vue-class-component";
import { useStore } from "vuex";

export default class ToasterComponent extends Vue {
  store = useStore();

  toasts = this.store.getters.toasts;

  closeToast(index: number) {
    this.store.dispatch("closeToast", index);
  }

  getIconClass(type: string) {
    switch (type) {
      case "danger":
        return "text-danger bi-exclamation-circle-fill";
      case "warning":
        return "text-warning bi-exclamation-triangle-fill";
      case "success":
        return "text-success bi-check";
    }
  }
}
</script>

<style lang="scss">
.toaster {
  position: fixed;
  right: 1vh;
  bottom: 1vh;

  .toast {
    background-color: var(--black);
    width: 30vw;
    max-width: 350px;
    min-height: 100px;
    text-align: left;
    color: var(--white);
    margin-top: 0.5em;

    .toast-header {
      background-color: var(--full-black);
      padding: 0.5em 1em;
      display: flex;
      justify-content: space-between;

      .close-toast {
        background-color: transparent;
        color: var(--white);
        font-size: 1em;
        padding: 0;
        border: none;
        outline: none;
      }
    }
    .toast-content {
      padding: 0.5em 1em;
      font-size: 1em;
    }
  }
}
</style>
