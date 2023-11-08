<template>
  <div :class="['container', !self ? 'auth-container' : '']">
    <SidebarComponent v-if="self" />
    <div id="content">
      <router-view />
    </div>
  </div>
  <Toaster />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SidebarComponent from "./components/Sidebar.vue";
import Toaster from "./components/Toaster.vue";
import self_intefrace from "./utility/interfaces/SelfInterface";
import { useStore } from "vuex";

@Options({
  components: {
    SidebarComponent,
    Toaster,
  },
})
export default class App extends Vue {
  store = useStore();
  get self(): self_intefrace | null {
    return this.store.getters.self;
  }
}
</script>
<style lang="scss">
:root {
  --black: #1f1f1f;
  --white: #f1f1f1;
  --green: #28a745;
  --green-hover: #36c056;
  --red: #dc3545;
  --red-apple: #e66465;
  --purpul: #9198e5;
  --yellow: #ffc107;
  --full-black: #000000;
  --full-white: #ffffff;
}
* {
  transition: 0.3s;
}
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 100%;
  min-height: 100vh;
  background-color: var(--white);
  display: flex;
  #content {
    flex: 1;
  }
}
.text-danger {
  color: var(--red);
}
.text-success {
  color: var(--green);
}
.text-warning {
  color: var(--yellow);
}
</style>
