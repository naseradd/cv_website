<template>
  <div>
    <!--<h3 v-if="isEnglish" class="title text-center">{{ title_en }}</h3>
    <h3 v-if="!isEnglish" class="title text-center">{{ title_fr }}</h3>-->
    <h4 v-if="isEnglish" class="text-center">{{ langage_en }}</h4>
    <h4 v-if="!isEnglish" class="text-center">{{ langage_fr }}</h4>

    <div class="elevation-demo">
      <div v-for="job in job_title" v-bind:todo="job" v-bind:key="job">
        <md-content class="text-center md-elevation-4 md-accent">
          <div class="case text-center" vertical-align: middle>
            <h6>{{ job }}</h6>
          </div>
        </md-content>
      </div>
    </div>
    <md-divider /><br />
    <h4 class="title text-center" v-if="isEnglish">{{ phrase_intro_en }}</h4>
    <h4 class="title text-center" v-if="!isEnglish">{{ phrase_intro_fr }}</h4>
    <br />
    <center>
      <h5 style="width:70%">"{{ isEnglish ? phrase_profil_en : phrase_profil_fr }}"</h5>
      <md-button
        class="md-success"
        href="https://drive.google.com/drive/folders/1sxp4wSU_pixWGJlv_ASw3HbNVQty0-u4?usp=sharing"
        target="_blank"
        >{{ isEnglish ? "Access to my resume": "Accéder à mon C.V."}}</md-button
      >
      <br /><br />
      <md-divider />
    </center>
    <div class="Competences">
      <div class="elevation-demo">
        <md-card class="skill" style="background:#f3f3f3;">
          <center><br/>
            <md-avatar class="md-avatar-icon md-accent md-large">
              <md-icon
                class="md-size-2x md-layout-item ml-auto mr-auto md-size-100"
                >code</md-icon
              ></md-avatar
            >
          </center>
          <br />
          <h4 v-if="!isEnglish" class="title text-center">
            Langages de programmation
          </h4>
          <h4 v-else class="title text-center">Programing langages</h4>
          <md-card-content>
            <ul>
              <li
                v-for="text in dev_langages"
                v-bind:todo="text"
                v-bind:key="text"
              >
                {{ text }}
              </li>
            </ul>
          </md-card-content>
        </md-card>
        <md-card class="skill" style="background:#f3f3f3;">
          <center><br/>
            <md-avatar class="md-avatar-icon md-accent md-large">
              <md-icon
                class="md-size-2x md-layout-item ml-auto mr-auto md-size-100"
                >playlist_add_check</md-icon
              ></md-avatar
            >
          </center>
          <br />
          <h4 v-if="!isEnglish" class="title text-center">
            Notions spécifiques
          </h4>
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
        <md-card class="skill" style="background:#f3f3f3;">
          <center><br/>
            <md-avatar class="md-avatar-icon md-accent md-large">
              <md-icon
                class="md-size-2x md-layout-item ml-auto mr-auto md-size-100"
                >apps</md-icon
              ></md-avatar
            >
          </center>
          <br />
          <h4 v-if="!isEnglish" class="title text-center">Logiciels</h4>
          <h4 v-else class="title text-center">Softwares</h4>

          <md-card-content>
            <ul>
              <li
                v-for="text in softwares"
                v-bind:todo="text"
                v-bind:key="text"
              >
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
      // title_fr: "Recherche un emploi temps plein",
      // title_en: "Looking for a full-time job starting",
      langage_fr: "Français natif / Anglais courant",
      langage_en: "French native / English regular",
      job_title: [],
      job_title_fr: [
        "Développeur Fullstack",
        "Ingénieur logiciel",
        "Container / Cloud",
        "Réalité augmentée / Réalité virtuelle (XR)",
        "Programmeur Outils",
      ],
      job_title_en: [
        "Fullstack developer",
        "Software Engineer",
        "Container / Cloud",
        "Augmented reality / Virtual Reality (XR)",
        "Tool Programmer",
      ],
      dev_langages: [
        "C / C++ / C# (.Net)",
        "Vue.JS",
        "HTML / CSS / JavaScript",
        "Python",
        "Unix / Bash",
        "Powershell",
      ],
      softwares: ["Git","Visual Studio","docker","Perforce", "Unreal Engine 4","Unity", "..."],
      skills_fr: [
        "Génie logiciel",
        "Développement Front-end et Back-end",
        "Services Web Amazon (AWS)",
        "Docker containers",
        "Réalité augmentée et virtuelle (XR)",
        "Système réparti, réplication, cloud",
        "Infographie",
        "Administration réseaux",
        "Administration systèmes",
        "Cybersécurité logiciels et réseaux",
        "Multimédia",
      ],
      skills_en: [
        "Computer science",
        "Front-end & Back-end developement",
        "Amazon web services (AWS)",
        "Docker containers",
        "Augmented and virtual reality (XR)",
        "Distributed system, replication, cloud",
        "Computer graphics",
        "Database management",
        "Networks administration",
        "Systems administration",
        "Cybersecurity software and networks",
        "Multimedia",
      ],
      // phrase_intro_fr: `Diplômé de Polytechnique Montréal et Grenoble, je souhaiterais aujourd’hui rejoindre une
      //    équipe pour apporter mon expérience et mon savoir-faire en tant qu’ingénieur logiciel`,
      // phrase_intro_en: `Graduate from Polytechnique Montréal and Grenoble, I would like to join a team to bring my experience as a software engineer.`,
      phrase_intro_fr: `Diplômé de Polytechnique Montréal et Grenoble`,
      phrase_intro_en: `Graduate from Polytechnique Montréal and Grenoble`,
      // phrase_profil_en: `Having studied various technologies and computer languages. I'm looking for work on concrete projects in a team in order to bring my skills. I am versatile and can adapt to various infrastructures and needs such as web, cloud or software applications.`,
      // phrase_profil_fr: `Ayant étudié diverses technologies et langages informatiques. Je suis à la recherche d'un travail sur des projets concrets en équipe afin d'apporter mes compétences. Je suis polyvalent et sais m'adapter à divers infrastructures et besoins comme les applications web, cloud ou logiciels.`,
      phrase_profil_en: `Having studied various technologies and computer languages. I am versatile and can adapt to various infrastructures and needs such as web, cloud or software applications.`,
      phrase_profil_fr: `Ayant étudié diverses technologies et langages informatiques. Je suis polyvalent et sais m'adapter à divers infrastructures et besoins comme les applications web, cloud ou logiciels.`,

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
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.md-content {
  width: auto;
  height: auto;
  margin: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}



[class*="case"] {
  margin: 12px;
  justify-content: center;
}
[class*="skill"] {
  width: 270px;
  height: auto;
  margin: 12px;
  display: inline-block;
  
  
}

</style>
