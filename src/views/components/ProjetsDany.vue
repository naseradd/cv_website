<template class="Projets">
  <div>
    <div v-if="isMobile">
      <div class="elevation-demo">
        <div
          v-for="project in project_fr"
          v-bind:todo="project"
          v-bind:key="project.id"
        >
          <div v-on:click="see_project(project.id)">
            <md-card
              :id="project.id"
              class="md-elevation-8 text-center"
              md-with-hover
              ><md-ripple>
                <div class="case" vertical-align: middle>
                  <i :class="project.icon" aria-hidden="true"></i><br /><br />
                  <span v-if="!isEnglish">{{ project.title_fr }}</span>
                  <span v-else>{{ project.title_en }}</span>
                </div></md-ripple
              >
            </md-card>
          </div>
        </div>
      </div>
      <div class="main" id="projet"></div>
      <md-divider class="md-inset"></md-divider>
      <div
        v-for="project in project_fr"
        v-bind:todo="project"
        v-bind:key="project.id"
      >
        <div v-if="project_index === project.id">
          <h4 v-if="!isEnglish" class="title text-center">
            {{ project.title_fr }}
          </h4>
          <h4 v-else class="title text-center">{{ project.title_en }}</h4>
          <div
            class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto"
          >
            <img
              :src="project.image"
              alt="Raised Image"
              class="img-raised rounded"
              :class="{ 'responsive-image': false }"
            /><br /><br />
          </div>

          <ul
            class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto"
          >
            <li
              v-if="!isEnglish"
              v-for="text in project.description_fr"
              :key="text"
            >
              {{ text }}
            </li>
            <li
              v-if="isEnglish"
              v-for="text in project.description_en"
              :key="text"
            >
              {{ text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- PC Display -->
    <div v-if="!isMobile">
      <div class="md-layout md-column">
        <div class="md-layout-item md-size-30">
          <div
            v-for="project in project_fr"
            v-bind:todo="project"
            v-bind:key="project.id"
          >
            <div v-on:click="see_project(project.id)">
              <md-card
                :id="project.id"
                class="md-elevation-8 text-center"
                md-with-hover
              >
                <div class="case" vertical-align: middle>
                  <i :class="project.icon" aria-hidden="true"></i><br /><br />
                  <span v-if="!isEnglish">{{ project.title_fr }}</span>
                  <span v-else>{{ project.title_en }}</span>
                </div>
              </md-card>
            </div>
          </div>
        </div>

        <div class="md-layout-item md-size-70">
          <div class="main"></div>
          <div
            v-for="project in project_fr"
            v-bind:todo="project"
            v-bind:key="project.id"
          >
            <div v-if="project_index === project.id">
              <h4 v-if="!isEnglish" class="title text-center">
                {{ project.title_fr }}
              </h4>
              <h4 v-else class="title text-center">{{ project.title_en }}</h4>
              <br />
              <center>
                <img
                  :src="project.image"
                  alt="Raised Image"
                  class="img-raised rounded"
                  :class="{ 'responsive-image': false }"
                /><br /><br />
              </center>

              <ul
                class="md-layout-item md-size-100 md-xsmall-size-100 ml-auto mr-auto"
              >
                <li
                  v-if="!isEnglish"
                  v-for="text in project.description_fr"
                  :key="text"
                >
                  {{ text }}
                </li>
                <li
                  v-if="isEnglish"
                  v-for="text in project.description_en"
                  :key="text"
                >
                  {{ text }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjetsDany",
  bodyClass: "projets-dany",

  components: {},
  props: {
    isEnglish: {
      type: Boolean,
      default: false,
    },
    img_logiciel: {
      type: String,
      default: require("@/assets/img/dany_cv/image_logiciel.jpg"),
    },
    img_entrepot: {
      type: String,
      default: require("@/assets/img/dany_cv/entrepot_bois.png"),
    },
    img_discord: {
      type: String,
      default: require("@/assets/img/dany_cv/discord_bot.png"),
    },
    img_ar: {
      type: String,
      default: require("@/assets/img/dany_cv/xr_image.jpg"),
    },
    img_hololens: {
      type: String,
      default: require("@/assets/img/dany_cv/stage_hololens.jpg"),
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      project_index: 1,
      project_fr: [
        {
          title_fr: "Formulaire numérique partagé Windows 10 (C#/WPF)",
          title_en: "Windows 10 Shared Digital Form (C#/WPF)",
          image: this.img_logiciel,
          icon: "fab fa-windows fa-3x",
          description_fr: [
            "Projet industriel de 6 mois pour construction du cahier des charges, conception et installation à l'entreprise C-TEC Constellium",
            "Conception d'une application tactile front-end et back-end sous le modèle MVC C#/WPF pour système Windows 10",
            "Formulaire numérique pour assurer un suivi de processus industriel synchronisé entre plusieurs tablettes en temps réel",
            "Administration et maintenance du logiciel et de la base de données depuis une interface web",
          ],
          description_en: [
            "6 month industrial project for the construction of the specifications, design and installation at the company C-TEC Constellium",
            "Design of a front-end and back-end touch application under the MVC C#/WPF model for Windows 10 system",
            "Digital form to ensure a synchronized industrial process monitoring between several tablets in real time",
            "Administration and maintenance of the software and database from a web interface",
          ],
          id: 1,
        },
        {
          title_fr:
            "Interface AR avec casque pour contrôler un essaim de drônes",
          title_en: "AR headset interface  to control a swarm of UAVs",
          image: this.img_ar,
          icon: "fa fa-hand-pointer fa-3x",
          description_fr: [
            "Projet M. Sc. A. pendant 2 ans reliés à un partenaire industriel",
            "Développement avec Unreal Engine 4 et C++ pour un déploiement rapide en VR et/ou AR",
            "Conception et tests réalisés avec le laboratoire d'infographie et réalité virtuelle",
            "Utilisation des casques AR Magic Leap 1 et Hololens 1.0",
            "Contrôle d'un essaim de drones et consommation de l'information dans le cadre des situations d'urgence",
            "Interaction basée sur l'utilisation des mains dans un univers 3D",
          ],
          description_en: [
            "M. Sc. A. project for 2 years related to an industrial partner",
            "Development with Unreal Engine 4 and C++ for rapid deployment in VR and/or AR",
            "Design and tests carried out with the computer graphics and virtual reality laboratory",
            "Use of AR Magic Leap 1 and Hololens 1.0 headsets",
            "Control of a UAV swarm and information consumption in emergency situations",
            "Interaction based on the use of hands in a 3D universe",
          ],
          id: 2,
        },
        {
          title_fr: "Automatisation de tâches sur les serveurs Discord",
          title_en: "Automation of tasks on Discord servers",
          image: this.img_discord,
          icon: "fa fa-code fa-3x",
          description_fr: [
            "Développement JavaScript avec Node.js pour un bot automatique sur les serveurs discords",
            "Gestion automatique, liste d'attente et demande des tickets des utilisateurs",
            "Redirection des acteurs selon l'ordre des demandes",
            "Intégration de fonctionnalités diverses (youtube, jeux, etc ...)",
          ],
          description_en: [
            "JavaScript development with Node.js for an automatic bot on discord servers",
            "Automatic management, waiting list and request for user tickets",
            "Redirection of the actors according to the order of the requests",
            "Integration of various features (youtube, games, etc ...)",
          ],
          id: 3,
        },
        {
          title_fr:
            "Serveur REST, BDD et module de communication pour synchronisation de plusieurs Hololens 1.0",
          title_en:
            "REST server, DB and communication module for multiple Hololens 1.0 synchronization",
          image: this.img_hololens,
          icon: "fa fa-wifi fa-3x",
          description_fr: [
            "Échange temps réel de données entre plusieurs Hololens 1.0",
            "Centralisation sur serveur REST et mise en place d'une base de données (Django/Python)",
            "Module de communication en C++ pour Hololens 1.0 pour faire les requêtes sécurisées sur le serveur",
          ],
          description_en: [
            "Real-time data exchange between several Hololens 1.0",
            "Centralization on REST server and implementation of a database (Django/Python)",
            "Communication module in C++ for Hololens 1.0 to make secure requests on the server",
          ],
          id: 4,
        },
        {
          title_fr: "Modélisation 3D d'un entrepôt depuis une BDD",
          title_en: "3D modeling of a warehouse from a database",
          image: this.img_entrepot,
          icon: "fa fa-cubes fa-3x",
          description_fr: [
            "Javascript et WebGL pour modéliser en 3D un entrepôt de bois.",
            "Modèle 3D dynamique mis à jour depuis le contenu de la base de données",
          ],
          description_en: [
            "Javascript and WebGL to model a wood warehouse in 3D",
            "Dynamic 3D model updated from database content",
          ],
          id: 5,
        },
      ],
    };
  },

  methods: {
    see_project: function (index) {
      // `this` inside methods points to the Vue instance
      this.project_index = index;
      var i;
      for (i = 1; i < 6; i++) {
        document.getElementById(i).classList.remove("md-accent");
      }
      document.getElementById(this.project_index).classList.add("md-accent");
      document.getElementById("projet").scrollIntoView({ behavior: "smooth" });
    },
    initProject: function () {
      document.getElementById("1").classList.add("md-accent");
    },
  },
  mounted() {
    this.initProject();
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
.md-content {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
}

.md-card {
  width: auto;
  height: auto;
  margin: 12px;
  display: flex;
  align-items: center;
}


.md-button {
  margin: 24px;
}

.md-layout {
  margin: 24px;
  display: flex;
  align-items: top;
}

[class*="case"] {
  margin: 12px;
  justify-content: center;
}
.img-raised {
  width: auto;
  height: 300px;
}

.md-divider {
  border-right-width: .5px;
  border-right-style: solid;
  height: 100%;
}
</style>
