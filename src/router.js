import Vue from "vue";
import Router from "vue-router";
import PageFR from "./views/PageFR.vue";
import PageEN from "./views/PageEN.vue";
import MainNavbarDany from "./layout/MainNavbarDany.vue";
import MainFooterDany from "./layout/MainFooterDany.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: '/', redirect: '/fr' },
    {
      path: "/fr",
      name: "page",
      components: { default: PageFR, header: MainNavbarDany, footer: MainFooterDany },
      props: {
        header: { colorOnScroll: 150 },
        footer: { backgroundColor: "black" }
      }
    },
    {
    path: "/en",
      name: "page",
      components: { default: PageEN, header: MainNavbarDany, footer: MainFooterDany },
      props: {
        header: { colorOnScroll: 150 },
        footer: { backgroundColor: "black" }
      }
    },
    ,
    {
      path: "/memoire",
      redirect: require("@/assets/pdf/manuscript.pdf")
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
