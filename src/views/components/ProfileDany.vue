<template>
  <div>
    <h3 v-if="isEnglish" class="title text-center">{{ title_en }}</h3>
    <h3 v-if="!isEnglish" class="title text-center">{{ title_fr }}</h3>
    <h4 v-if="isEnglish" class="text-center">{{ langage_en }}</h4>
    <h4 v-if="!isEnglish" class="text-center">{{ langage_fr }}</h4>

    <div class="elevation-demo">
      <div v-for="job in job_title" v-bind:todo="job" v-bind:key="job">
        <md-content class="text-center md-elevation-1">
          <div class="case text-center" vertical-align: middle>
            <h4>{{ job }}</h4>
          </div>
        </md-content>
      </div>
    </div>
    <div class="Competences">
      <div class="elevation-demo">
        <md-card class="skill">
            <md-icon class="md-size-2x md-layout-item ml-auto mr-auto md-size-100">code</md-icon>
            <h4 v-if="!isEnglish" class="title text-center">Langages de programmation</h4>
            <h4 v-else class="title text-center">Programing langages</h4>
          <md-card-content>
            <ul>
              <li v-for="text in dev_langages" v-bind:todo="text" v-bind:key="text">
                {{ text }}
              </li>
            </ul>
          </md-card-content>
        </md-card>
        <md-card class="skill">
            <md-icon class="md-size-2x md-layout-item ml-auto mr-auto md-size-100">playlist_add_check</md-icon>
            <h4 v-if="!isEnglish" class="title text-center">Notions spécifiques</h4>
            <h4 v-else class="title text-center">Specific concepts</h4>
          <md-card-content>
            <ul>
              <li
                v-if="!isEnglish"
                v-for="text in skills_fr"
                v-bind:todo="text"
                v-bind:key="text"
              >
                {{ text }}
              </li>
              <li
                v-if="isEnglish"
                v-for="skill in skills_en"
                v-bind:todo="skill"
                v-bind:key="skill"
              >
                {{ skill }}
              </li>
            </ul>
          </md-card-content>
        </md-card>
        <md-card class="skill">
         
            <md-icon class="md-size-2x md-layout-item ml-auto mr-auto md-size-100">apps</md-icon><br>
            <h4 v-if="!isEnglish" class="title text-center">Logiciels</h4>
            <h4 v-else class="title text-center">Softwares</h4>
          
          <md-card-content>
            <ul>
              <li v-for="text in softwares" v-bind:todo="text" v-bind:key="text">
                {{ text }}
              </li>
            </ul>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDany",
  bodyClass: "profile-dany",
  data() {
    return {
      title_fr: "Recherche d'un emploi junior temps plein",
      title_en: "Looking for a full-time junior job starting",
      langage_fr: "Français / Anglais",
      langage_en: "French / English",
      job_title: [],
      job_title_fr: [
        "Fullstack",
        "Back-end",
        "Réalité augmentée / Réalité virtuelle (XR)",
        "Ingénieur logiciel",
        "Ingénieur développeur",
        "...",
      ],
      job_title_en: [
        "Fullstack",
        "Back-end",
        "Augmented reality / Virtual Reality (XR)",
        "Software Engineer",
        "Dev Engineer",
        "...",
      ],
      dev_langages: [
        "C / C++ / C#",
        "Java",
        "HTML / CSS / JavaScript",
        "Python",
        "Unix / Bash",
      ],
      softwares: ["Visual Studio 2019", "Unreal Engine 4", "PyCharm", "Unity"],
      skills_fr: [
        "Génie logiciel",
        "Réalité augmentée et virtuelle (XR)",
        "Git",
        "Développement Front-end et Back-end",
        "Services Web Amazon (AWS)",
        "Système réparti, réplication, cloud",
        "IA / Apprentissage machine",
        "Infographie",
        "Gestion de base de données",
        "Administration réseaux",
        "Administration systèmes",
        "Cybersécurité logiciels et réseaux",
        "Multimédia",
      ],
      skills_en: [
        "Computer science",
        "Augmented and virtual reality (XR)",
        "Git",
        "Front-end & Back-end developement",
        "Amazon web services (AWS)",
        "Distributed system, replication, cloud",
        "AI / Machine Learning",
        "Computer graphics",
        "Database management",
        "Networks administration",
        "Systems administration",
        "Cybersecurity software and networks",
        "Multimedia",
      ],
    };
  },
  components: {},
  props: {
    isEnglish: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    setLanguage: function () {
      if (this.isEnglish == false) {
        this.job_title = this.job_title_fr;
      } else {
        this.job_title = this.job_title_en;
      }
    },
  },
  beforeMount() {
    this.setLanguage();
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
  margin: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}


[class*="case"] {
  margin: 30px;
  justify-content: center;
}
[class*="skill"] {
  width: 270px;
  height: auto;
  margin: 12px;
  display: inline-block;
}
</style>
