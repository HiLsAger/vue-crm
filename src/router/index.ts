import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SettingsView from "@/views/SettingsView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Главная",
    meta: {
      sidebar: true,
      bootstrapIconClass: "bi-house-fill",
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "Описание",
    meta: {
      sidebar: true,
      bootstrapIconClass: "bi-info-circle-fill",
    },
    component: AboutView,
  },
  {
    path: "/settings",
    name: "settings",
    meta: {
      bootstrapIconClass: "bi-gear-fill",
    },
    component: SettingsView,
  },
  {
    path: "/auth/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/auth/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
