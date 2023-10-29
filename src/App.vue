<template>
  <div class="container">
    <SidebarComponent />
    <div id="content">
      <router-view/>
  </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SidebarComponent from './components/Sidebar.vue';

@Options({
  components:{
    SidebarComponent
  }
})
export default class App extends Vue {
}
</script>
<style lang="scss">
:root{
  --black: #1f1f1f;
  --white: #f1f1f1
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container{
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  display: flex;
}
</style>
