import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeRoute.vue";
import About from "@/views/AboutRoute.vue"
import Jobdetails from "@/views/Jobs/JobdetailsRoute.vue"
import Jobs from "@/views/Jobs/JobsRoute.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/jobs/:id",
    name: "Jobdetails",
    component: Jobdetails
  },
  {
    path:"/jobs",
    name: "Jobs",
    component: Jobs
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;