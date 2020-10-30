import Vue from "vue";
import Router from "vue-router";
import Page from "./views/Page.vue";
import MainNavbarDany from "./layout/MainNavbarDany.vue";
import MainFooterDany from "./layout/MainFooterDany.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Page, header: MainNavbarDany, footer: MainFooterDany },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
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
