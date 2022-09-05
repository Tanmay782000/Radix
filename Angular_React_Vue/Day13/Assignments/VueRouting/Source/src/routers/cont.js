import { createWebHistory, createRouter } from "vue-router";
import StudentDetails from "@/components/StudentDetails.vue";
const routes = [
  {
    path: "/StudentDetails/:id",
    name: "StudentDetails",
    component: StudentDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;