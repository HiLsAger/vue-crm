<template>
    <div class="login-form">
        <div>
            <label for="login">Логин</label>
            <input id="login" v-model="auth.login" v-on:input="onChange(auth.login)">
        </div>
        <div>
            <label for="password">Пароль</label>
            <input id="password" v-model="auth.password" v-on:input="onChange(auth.password)">
        </div>
        <button v-on:click="onSubmit()">Войти</button>
    </div>
    </template>
    
    <script lang="ts">
    import { Vue } from 'vue-class-component';
    
    interface login {
        login: string;
        password: string;
    }
    export default class LoginView extends Vue{
        auth: login = {
            login: '',
            password: ''
        };

        onChange(value:string) {
            console.log(value)
        }

        onSubmit(){
            console.log(this.auth)
        }
    }
    </script>
    
    <style lang="scss">
    </style>