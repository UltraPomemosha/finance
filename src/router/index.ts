import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/learning",
      name: "learning",
      component: () => import("../views/LearningView.vue"),
    },
    {
      path: "/finance",
      name: "finance",
      component: () => import("../views/FinanceView.vue"),
    },
    {
      path: "/competition",
      name: "competition",
      component: () => import("../views/CompetitionView.vue"),
    },
    {
      path: "/competition/:id",
      name: "quest",
      component: () => import("../views/QuestView.vue"),
    },
    {
      path: "/results",
      name: "quests-result",
      component: () => import("../views/ResultsView.vue"),
    },
  ],
})

export default router
