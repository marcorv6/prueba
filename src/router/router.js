import { createWebHistory, createRouter } from "vue-router";
import TableComponent from "../components/TableComponent.vue";
import CreateUser from "../components/CreateUser.vue";
import DetailedView from "../components/DetailedView.vue";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: TableComponent,
  },
  {
    path: "/CreateUser",
    name: "CreateUser",
    component: CreateUser,
  },
  {
    path: "/DetailedView",
    name: "DetailedView",
    component: DetailedView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;