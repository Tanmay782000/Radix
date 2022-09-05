import { createWebHistory, createRouter } from "vue-router";
import HomeIn from "@/components/HomeIn.vue";
import LogIn from "@/components/LogIn.vue"
const routes = [
  {
    path: "/HomeIn",
    name: "HomeIn",
    component: HomeIn,
    meta:{ requireAuth:true}  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
    meta:{auth:false}
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to,from,next) => {
    if(to.matched.some((rec)=>rec.meta.requireAuth))
    {
       if(isAuthenticated())
       {
           next()
       }
       else
       {
           next('/LogIn')
       }
    }   
    else
    { 
        next()
    console.log(to.fullPath.username)
    }  
   })

export default router;