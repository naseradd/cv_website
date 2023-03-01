import Vue from "vue";
import Router from "vue-router";
import PageFR from "./views/PageFR.vue";
import NewPage from "./views/NewPage.vue";
import PageEN from "./views/PageEN.vue";
import Pdf from "./components/pdf_page.vue";
import MainNavbarDany from "./layout/MainNavbarDany.vue";
import MainFooterDany from "./layout/MainFooterDany.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        // { path: '/', redirect: '/dev' },
        { path: '/en', redirect: '/' },
        { path: '/fr', redirect: '/' },
        {
            path: "/",
            components: { default: NewPage, header: MainNavbarDany, footer: MainFooterDany },
            props: {
                header: { colorOnScroll: 150, },
                footer: { backgroundColor: "black"}
            }
        },
        
        {
            path: "/memoire",
            component: Pdf,
            props: {
                path: require("@/assets/pdf/manuscript.pdf")
            }
        },
        {
            path: "/french_cv",
            component: Pdf,
            props: {
                path: require("@/assets/pdf/CV_FR_CAD_DanyNaserAddin.pdf")
            }
        },
        {
            path: "/english_cv",
            component: Pdf,
            props: {
                path: require("@/assets/pdf/CV_EN_CAD_DanyNaserAddin.pdf")
            }
        }
        // {
        //     path: "/dev",
        //     components: { default: NewPageFR, header: MainNavbarDany, footer: MainFooterDany },
        //     props: {
        //         header: { colorOnScroll: 150 },
        //         footer: { backgroundColor: "black" },

        //     },
        // }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
    
});