import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return (originalPush.call(this, location)).catch((err) => err);
};

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "HOME",
    component: () => import("../views/home/IndexView.vue"),
  },
  {
    path: "/recruit",
    name: "RECRUIT",
    component: () => import("../views/recruit/IndexView.vue"),
  },
  {
    path: "/expedition",
    name: "EXPEDITION",
    component: () => import("../views/expedition/IndexView.vue"),
  },
  {
    path: "/tavern",
    name: "TAVERN",
    component: () => import("../views/tavern/IndexView.vue"),
  },

  {
    path: "/dashboard",
    // name: "DASHBOARD",
    component: () => import("../views/dashboard/IndexView.vue"),
  },
  { path: "*", redirect: "/home" },
];

const router = new VueRouter({
  routes,
});

// 跳转后返回顶部
// router.afterEach(() => {
//   window.scrollTo(0, 0);
// });
export default router;
