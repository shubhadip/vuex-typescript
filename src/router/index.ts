import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => {
      const vehicleType = process.env.VUE_APP_VEHICLE_TYPE;
      return import(
        /* webpackChunkName: "about" */ "../views/About/" +
          vehicleType +
          "/About.vue"
      );
    }
  },
  {
    path: "/compositionapi",
    name: "CompositionApi",
    component: () =>
      import(/* webpackChunkName: "cc" */ "../views/CompositionComponent.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
