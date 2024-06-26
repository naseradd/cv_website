<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Dany Naser Addin</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false"> </mobile-menu>
            <md-list>
              <md-list-item
                href="https://drive.google.com/drive/folders/1sxp4wSU_pixWGJlv_ASw3HbNVQty0-u4?usp=sharing"
                target="_blank"
              >
                <i class="material-icons">content_paste</i>
                <p>{{ isEnglish ? "Resume" : "Résumé" }}</p>
              </md-list-item>
              <md-list-item
                v-if="isEnglish"
                href="https://www.linkedin.com/in/dany-naser-addin-116163101/?locale=en_US"
                target="_blank"
              >
                <i class="material-icons">work</i>
                <p>Linkedin</p>
              </md-list-item>
              <md-list-item
                v-if="!isEnglish"
                href="https://www.linkedin.com/in/dany-naser-addin-116163101"
                target="_blank"
              >
                <i class="material-icons">work</i>
                <p>Linkedin</p>
              </md-list-item>
              <md-list-item @click="$emit('changeLangage')">
                <a>{{ englishPageName }}</a>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
    isEnglish: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    isEnglish: function () {
      this.changeLangage();
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
      englishPageName: "Français",
      langagePageName: "/fr",
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    changeLangage() {
      if (!this.isEnglish) {
        this.englishPageName = "English";
      } else {
        this.englishPageName = "Français";
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    this.changeLangage();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
