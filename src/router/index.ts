import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import SettingsView from "@/views/SettingsView.vue";
import AuthView from "@/views/auth/AuthView.vue";

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
    path: "/login",
    name: "Аутентификация",
    component: AuthView,
    meta: {
      bootstrapIconClass: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
