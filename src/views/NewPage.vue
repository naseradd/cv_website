<template>

  <div class="wrapper">
  <router-view :is-english="isEnglish"></router-view>
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="img" alt="Rounded Image" class="img-raised rounded-raised" />
                </div>
                <div class="name">
                  <h3 class="title">Dany Naser Addin</h3>
                  <h3>{{ title }}</h3>

                  <md-icon>sports_esports</md-icon>
                  <md-icon>laptop</md-icon>
                  <md-icon>airplanemode_active</md-icon>
                  <md-icon>local_movies</md-icon>
                  <md-icon>free_breakfast</md-icon>
                  <md-icon>fitness_center</md-icon>
                  <md-icon>sports_bar</md-icon>
                  <md-icon>sports_handball</md-icon>
                  <md-icon>sports_tennis</md-icon>
                  <md-icon>music_note</md-icon>
                </div>
              </div>
            </div>
          </div>
          <div >
              <tabs
                :tab-name="tabs_profile"
                :tab-icon="tabs_icons"
                plain
                nav-pills-icons
                color-button="success"
                :isMobile="isMobile"
                id="projet"
              >
                <!-- here you can add your content for tab-content -->
                <template slot="tab-pane-1">
                  <md-divider class="md-inset"></md-divider>
                  <div class="container">
                    <profile-dany :isEnglish="isEnglish"></profile-dany>
                  </div>
                </template>
                <template slot="tab-pane-2">
                  <md-divider class="md-inset"></md-divider>
                  <projets-dany :isEnglish="isEnglish" :isMobile="isMobile"></projets-dany>
                </template>
                <template slot="tab-pane-3">
                  <md-divider class="md-inset"></md-divider>
                  <experience-prof-dany :isEnglish="isEnglish" :isMobile="isMobile"></experience-prof-dany>
                </template>
                <template slot="tab-pane-4">
                  <md-divider class="md-inset"></md-divider>
                  <formation-dany :isEnglish="isEnglish" :isMobile="isMobile"></formation-dany>
                </template>
              </tabs>
            </div>
          <div v-if="!isEnglish" class="ml-auto mr-auto">
            <md-button
              class="md-raised ml-auto mr-auto md-success"
              @click="isHidden = !isHidden"
              >Contact et informations
            </md-button>
            <h5 v-if="!isHidden" class="mr-auto ml-auto">
              <b>Courriel : </b>
              <a href="mailto: dany.naser-addin@polymtl.ca">dany.naser-addin[at]polymtl.ca</a
              ><br />
              <b>Langues :</b> Français (native) - Anglais (intermédiaire)<br />
              <b>Permis voiture :</b> B (européen)<br />
              <b>Nationalité :</b> Française<br />
            </h5>
          </div>
          <div v-else class="ml-auto mr-auto">
            <md-button
              class="md-raised ml-auto mr-auto md-success"
              @click="isHidden = !isHidden"
              >Contact & Information
            </md-button>
            <h5 v-if="!isHidden" class="mr-auto ml-auto">
              <b>Mail : </b>
              <a href="mailto: dany.naser-addin@polymtl.ca">dany.naser-addin[at]polymtl.ca</a
              ><br />
              <b>Languages :</b> French (native) - English (mid-range)<br />
              <b>Car license :</b> B (european)<br />
              <b>Nationality :</b> French<br />
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
import ProfileDany from "./components/ProfileDany";
import FormationDany from "./components/FormationDany";
import ExperienceProfDany from "./components/ExperienceProfDany";
import ProjetsDany from "./components/ProjetsDany";

export default {
  name: "indexfr",
  components: {
    Tabs,
    ProfileDany,
    FormationDany,
    ExperienceProfDany,
    ProjetsDany,
  },

  bodyClass: "profile-page",
  data() {
    return {
      title: "M. Sc. A. et Ing. B. en génie informatique et logiciel",
      tabs_profile: ["Profil", "Projets", "Expériences professionelles", "Formations"],
      tabs_icons: ["face", "folder", "work", "school"],
      isHidden: true,
      isMobile: false,
      isEnglish: false,
      
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg"),
    },
    img: {
      type: String,
      default: require("@/assets/img/dany_cv/image_dany.jpg"),
    },
    
    
     
  },
  methods: {
    
    setLanguage: function () {
      
      if(this.$route.path == "/en"){
        this.isEnglish = true;
      }


      if (this.isEnglish == false) {
        this.tabs_profile = [
          "Profil",
          "Projets",
          "Expériences professionelles",
          "Formations",
        ];
        this.title = "M. Sc. A. et Ing. B. en génie informatique et logiciel";
      } else {
        this.tabs_profile = [
          "Profile",
          "Projects",
          "Professional experience",
          "Formations",
        ];
        this.title = "M. Sc. A. and Ing. B. in computer science";
      }
    },
    isItMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        this.isMobile = true;
      } else {
        this.isMobile =  false;
      }
    },
  },
  beforeMount() {
    this.setLanguage();
    this.isItMobile();
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.elevation-demo {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.nav_menu {
  margin-top: 24px;
}

.md-divider {
  margin: 24px;
}
</style>
