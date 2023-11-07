<template>
  <div class="login-form">
    <div>
      <label for="login">Логин</label>
      <input
        id="login"
        v-model="auth.login"
        v-on:input="onChange(auth.login)"
      />
    </div>
    <div>
      <label for="password">Пароль</label>
      <input
        id="password"
        v-model="auth.hash"
        v-on:input="onChange(auth.hash)"
      />
    </div>
    <button v-on:click="onSubmit()">Войти</button>
  </div>
</template>

<script lang="ts">
import self_intefrace from "@/utility/interfaces/SelfInterface";
import axios, { AxiosResponse } from "axios";
import { Vue } from "vue-class-component";
import { useStore } from "vuex";

interface login {
  login: string;
  hash: string;
}
export default class LoginComponent extends Vue {
  store = useStore();

  auth: login = {
    login: "",
    hash: "",
  };

  onChange(value: string) {
    console.log(value);
  }

  onSubmit() {
    axios
      .post("http://localhost:3000/auth/login", this.auth)
      .then((response: AxiosResponse<self_intefrace>) => {
        console.log(response);
        this.store.dispatch("setSelf", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(this.auth);
  }
}
</script>

<style lang="scss"></style>
