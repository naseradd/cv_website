<template class="Formations">
  <div>
    <div v-if="!isMobile" class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-30">
        <img
          :src="img_ubisoft"
        /><br /><br />
      </div>
    <div class="md-layout-item md-size-50">
        <h4><b>{{isEnglish ? "Tool Programmer" : "Programmeur Outils"}} - Ubisoft</b></h4>
        <div v-if="isEnglish">Current job</div>
        <div v-else>Emploi actuel</div>
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Juin 2022 - maintenant</h5>
        <h5 v-else>June 2022 - now</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="!isMobile" class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-30">
        <img
          :src="img_aspen"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-50">
        <h4><b>Fullstack Software developer AspenTechnology</b></h4>
        <ul v-if="!isEnglish">
          <li>
            Développeur pour back end et front end sur divers types
            d'applications.
          </li>
          <li>
            Résolution de défauts logiciels et implémentation de cas
            d'utilisations sur des applications .NET logiciels et plateforme
            Web.
          </li>
          <li>
            Participation a la mise en place de containers et d'un pipeline
            CI/CD au sein du cycle de développement.
          </li>
          <li>
            Plusieurs gratifications reçues de l'équipe en 1 an de
            collaboration.
          </li>
          <li>Mise en place d'afterwork et lunch au sein des équipes.</li>
        </ul>
        <ul v-else>
          <li>
            Full stack developer for desktop and web-based applications.Work in
            industrial software in production for companies all around the
            world.
          </li>
          <li>
            Collaborating with teams all around the world (USA , Shanghai).
          </li>
          <li>
            Defect resolution, features and tests implementation for .Net Core
            and Vue.js applications.
          </li>
          <li>
            Demonstrationand presentation of use cases for QA team. Automation
            of process to improve developers' work.
          </li>
          <li>
            Migration of current on-premises applications into docker
            containers.
          </li>
          <li>
            Set up of CI / CD gitlabpipeline for moving application from
            desktop-based to cloud-based.
          </li>
        </ul>
        <span class="text-subtitle"
          >.Net (C#/C++) - HTML/CSS/JS - Vue.js/Node.js - Powershell - AWS -
          Rest API - CI/CD - GitLab - Docker/Container - Windows - Perforce -
          Git</span
        >
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Février 2021 - Juin 2022</h5>
        <h5 v-else>February 2021 - June 2022</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="!isMobile" class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-30">
        <img
          :src="img_polymtl"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-50">
        <h4 v-if="!isEnglish">
          <b>Stage ingénieur au LIRV Polytechnique Montréal</b>
        </h4>
        <h4 v-else><b>Engineer Intern at LIRV Polytechnique Montréal</b></h4>
        <p v-if="!isEnglish">
          Mise en place une communication entre Hololens 1.0 via une structure
          centralisée. Mise en place d'une base de données , serveur et module
          de communication pour synchroniser les actions de plusieurs hololens.
          Virtualisation d'un entrepôt en trois dimensions sur une interface web
          pour visualiser graphiquement le contenu de la base de données.
        </p>
        <p v-else>
          Establishment of a communication between Hololens 1.0 via a
          centralized structure. Database, server and widget set-up for
          synchronizing the actions of several hololens. Virtualization of a
          three-dimensional warehouse on a web interface to graphically
          visualize the contents of the database.
        </p>
        <a
          href="https://www.polymtl.ca/rv/Activites/"
          target="_blank"
          class="text-center"
          v-if="!isEnglish"
        >
          Laboratoire d'infographie et réalité virtuelle (LIRV)</a
        >
        <a
          href="https://www.polymtl.ca/rv/Activites/"
          target="_blank"
          class="text-center"
          v-else
        >
          Computer graphics and virtual reality laboratory (LIRV)</a
        >
        <p v-if="!isEnglish">
          C++ - API Rest Django Python - BDD SQL - Modèle 3D Javascript - WebGL
        </p>
        <p v-else>
          C++ - API Rest Django Python - DB SQL - 3D Model - Javascript - WebGL
        </p>
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Janvier 2018 - Juillet 2018</h5>
        <h5 v-else>January 2018 - July 2018</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="!isMobile" class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-30">
        <img
          :src="img_constellium"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-50">
        <h4 v-if="!isEnglish">
          <b>Projet industriel ingénieur C-TEC Constellium</b>
        </h4>
        <h4 v-else><b>Engineer industrial project C-TEC Constellium</b></h4>
        <p v-if="!isEnglish">
          Conception déploiement et installation d'une application Windows 10
          chez l'entreprise C-TEC Constellium. Formulaire de suivi d'un
          processus en usine synchronisé entre plusieurs machines en temps réel.
          Service après vente chez le client.
        </p>
        <p v-else>
          Design, deployment and installation of a Windows 10 application at
          C-TEC Constellium. Follow-up form for a factory process synchronized
          between several machines in real time. After-sales service sale at the
          customer's premises.
        </p>
        <p v-if="!isEnglish">C#/WPF - Visual Studio - Génie logiciel</p>
        <p v-else>C#/WPF - Visual Studio - Software engineering</p>
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Janvier 2017 - Août 2017</h5>
        <h5 v-else>January 2017 - August 2017</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="!isMobile" class="md-layout md-alignment-center">
      <div class="md-layout-item md-size-30">
        <img
          :src="img_boxmyjob"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-50">
        <h4 v-if="!isEnglish"><b>Stage technicien Boxmyjob</b></h4>
        <h4 v-else><b>Technical Intern Boxmyjob</b></h4>
        <p v-if="!isEnglish">
          Automatisation des chemins de recherche d'un add-on de navigateur web
          pour la récupération d'informations sur divers pages web. Script de
          vérification des chemins de vérification pour le suivi du
          fonctionnement en Java.
        </p>
        <p v-else>
          Automation of the search paths of a web browser add-on for the
          retrieving information from various web pages. Java script to check
          the verification paths for monitoring operation.
        </p>
        <p>XPath - Java</p>
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Juin 2015 - Août 2015</h5>
        <h5 v-else>June 2015 - August 2015</h5>
      </div>
    </div>
    <!-- MOBILE CONTENT -->
    <div v-if="isMobile">
      <div class="md-layout-item">
        <img
          :src="img_aspen"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-100">
        <h4><b>Software developer AspenTechnology</b></h4>
        <p v-if="!isEnglish">Emploi actuel.</p>
        <p v-else>Current job.</p>
      </div>
      <div class="md-layout-item md-size-100">
        <h5 v-if="!isEnglish">Février 2021</h5>
        <h5 v-else>February 2021</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="isMobile">
      <div class="md-layout-item">
        <img
          :src="img_polymtl"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-100">
        <h4 v-if="!isEnglish">
          <b>Stage ingénieur au LIRV Polytechnique Montréal</b>
        </h4>
        <h4 v-else><b>Engineer Intern at LIRV Polytechnique Montréal</b></h4>
        <p v-if="!isEnglish">
          Mise en place d'une communication entre Hololens 1.0 via une structure
          centralisée. Mise en place d'une base de données , serveur et module
          de communication pour synchroniser les actions de plusieurs hololens.
          Virtualisation d'un entrepôt en trois dimensions sur une interface web
          pour visualiser graphiquement le contenu de la base de données.
        </p>
        <p v-else>
          Establishment of a communication between Hololens 1.0 via a
          centralized structure. Database, server and widget set-up for
          synchronizing the actions of several hololens. Virtualization of a
          three-dimensional warehouse on a web interface to graphically
          visualize the contents of the database.
        </p>
        <a
          href="https://www.polymtl.ca/rv/Activites/"
          target="_blank"
          class="text-center"
          v-if="!isEnglish"
        >
          Laboratoire d'infographie et réalité virtuelle (LIRV)</a
        >
        <a
          href="https://www.polymtl.ca/rv/Activites/"
          target="_blank"
          class="text-center"
          v-else
        >
          Computer graphics and virtual reality laboratory (LIRV)</a
        >
        <p v-if="!isEnglish">
          C++ - API Rest Django Python - BDD SQL - Modèle 3D Javascript - WebGL
        </p>
        <p v-else>
          C++ - API Rest Django Python - DB SQL - 3D Model - Javascript - WebGL
        </p>
      </div>
      <div class="md-layout-item md-size-100">
        <h5 v-if="!isEnglish">Janvier 2018 - Juillet 2018</h5>
        <h5 v-else>January 2018 - July 2018</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="isMobile">
      <div class="md-layout-item">
        <img
          :src="img_constellium"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-100">
        <h4 v-if="!isEnglish">
          <b>Projet industriel ingénieur C-TEC Constellium</b>
        </h4>
        <h4 v-else><b>Engineer industrial project C-TEC Constellium</b></h4>
        <p v-if="!isEnglish">
          Conception déploiement et installation d'une application Windows 10
          chez l'entreprise C-TEC Constellium. Formulaire de suivi d'un
          processus en usine synchronisé entre plusieurs machines en temps réel.
          Service après vente chez le client.
        </p>
        <p v-else>
          Design, deployment and installation of a Windows 10 application at
          C-TEC Constellium. Follow-up form for a factory process synchronized
          between several machines in real time. After-sales service sale at the
          customer's premises.
        </p>
        <p v-if="!isEnglish">C#/WPF - Visual Studio - Génie logiciel</p>
        <p v-else>C#/WPF - Visual Studio - Software engineering</p>
      </div>
      <div class="md-layout-item md-size-100">
        <h5 v-if="!isEnglish">Janvier 2017 - Août 2017</h5>
        <h5 v-else>January 2017 - August 2017</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="isMobile">
      <div class="md-layout-item">
        <img
          :src="img_boxmyjob"
          class="rounded"
          alt="Circle rounded"
        /><br /><br />
      </div>
      <div class="md-layout-item md-size-100">
        <h4 v-if="!isEnglish"><b>Stage technicien Boxmyjob</b></h4>
        <h4 v-else><b>Technical Intern Boxmyjob</b></h4>
        <p v-if="!isEnglish">
          Automatisation des chemins de recherche d'un add-on de navigateur web
          pour la récupération d'informations sur divers pages web. Script de
          vérification des chemins de vérification pour le suivi du
          fonctionnement en Java.
        </p>
        <p v-else>
          Automation of the search paths of a web browser add-on for the
          retrieving information from various web pages. Java script to check
          the verification paths for monitoring operation.
        </p>
        <p>XPath - Java</p>
      </div>
      <div class="md-layout-item md-size-100">
        <h5 v-if="!isEnglish">Juin 2015 - Août 2015</h5>
        <h5 v-else>June 2015 - August 2015</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceProfDany",
  bodyClass: "experience-prof-dany",
  data() {
    return {};
  },
  components: {},
  props: {
    isEnglish: {
      type: Boolean,
      default: false,
    },
    img_constellium: {
      type: String,
      default: require("@/assets/img/dany_cv/constelliumlogo.png"),
    },
    img_boxmyjob: {
      type: String,
      default: require("@/assets/img/dany_cv/boxmyjoblogo.png"),
    },
    img_polymtl: {
      type: String,
      default: require("@/assets/img/dany_cv/polylogo.png"),
    },
    img_aspen: {
      type: String,
      default: require("@/assets/img/dany_cv/AspenTech.jpg"),
    },
    img_ubisoft: {
      type: String,
      default: require("@/assets/img/dany_cv/Ubisoft-Logo.png"),
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
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
.md-layout {
  margin-top: 30px;
}
</style>
