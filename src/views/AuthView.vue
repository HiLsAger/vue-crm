<template>
  <div class="form">
    <LoginComponent v-if="isLogin" />
    <RegisterComponent v-else />
    <a v-on:click="changeAuth" class="switch-form">
      {{ isLogin ? "Зарегистрироваться" : "Уже зарегистрирован" }}
    </a>
  </div>
</template>

<script lang="ts">
import LoginComponent from "@/components/auth/Login.vue";
import RegisterComponent from "@/components/auth/Register.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    LoginComponent,
    RegisterComponent,
  },
})
export default class AuthView extends Vue {
  isLogin: boolean = true;

  get LoginComponent() {
    return LoginComponent;
  }

  get RegisterComponent() {
    return RegisterComponent;
  }

  changeAuth() {
    this.isLogin = !this.isLogin;
  }
}
</script>

<style lang="scss">
.auth-container,
.container {
  background: linear-gradient(300deg, var(--red-apple), var(--purpul));
  background-size: 200% 200%;
  animation: slideGradient 10s infinite alternate;
}
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;

  #content {
    display: flex;
    justify-content: center;

    .form {
      width: 30vw;
      max-width: 300px;
      background-color: var(--white);
      padding: 3rem 2rem;
    }

    .auth-btn {
      font-size: 1rem;
      border: none;
      padding: 0.4rem 1rem;
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      background-color: var(--green);
      color: var(--white);
      width: 100%;
    }
    .auth-btn:hover {
      background-color: var(--green-hover);
    }
    .switch-form {
      border: none;
      display: block;
      margin-top: 1rem;
    }
    .switch-form:hover {
      background-color: transparent;
      color: var(--black);
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
@keyframes slideGradient {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 100% 0%;
  }
}
</style>
