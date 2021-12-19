import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Orders from "../views/Orders.vue";
import OrderDetails from "../views/OrderDetails.vue";
import OrderHistory from "../views/OrderHistory.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orders",
    name: "Orders",
    component: Orders,
  },
  {
    path: "/orders/:id",
    name: "OrderDetails",
    component: OrderDetails,
  },
  {
    path: "/orderhistory",
    name: "OrderHistory",
    component: OrderHistory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
