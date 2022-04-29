<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle"></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img :src="img" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                </div>
                <div class="name">
                  <h3 class="title">Dany Naser Addin</h3>
                  <h4><b>M. Sc. A. et Ing. en génie informatique et logiciel</b></h4>
                  Loisirs :
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
          <div class="text-center" >
            <h4>
              Jeune français de 25 ans diplômé de Polytechnique Montréal (Canada) et Polytechnique Grenoble (France), je
              suis à la recherche d'un emploi temps plein pour commencer ma carrière professionnelle.
            </h4>
          </div>
          <template class="Projet">
            <div class="elevation-demo">
              <div v-on:click="see_project(1)" >
                <md-card md-with-hover class="md-elevation-8 text-center" ><md-ripple>
                  <div class="case" vertical-align: middle>
                    <i class="fab fa-windows fa-3x"></i><br><br>
                    <span>{{project_1}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="see_project(2)">
                <md-card md-with-hover class="md-elevation-8 text-center" v-on:click="project_index=2"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <md-icon class="md-size-2x">panorama_horizontal</md-icon><br><br>
                    <span>{{project_2}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="see_project(3)">
                <md-card md-with-hover class="md-elevation-8 text-center"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <i class="fab fa-discord fa-3x"></i><br><br>
                    <span>{{project_3}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="see_project(4)">
                <md-card md-with-hover class="md-elevation-8 text-center"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <md-icon class="md-size-2x md-font">http</md-icon><br>
                    <span>{{project_4}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="see_project(5)">
                <md-card md-with-hover class="md-elevation-8 text-center"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <i class="fas fa-cubes fa-3x"></i><br><br>
                    <span>{{project_5}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
            </div>
          </template>
          <div class="main" id="projet"></div><br><br>
          <div class="container">
          <div v-if="project_index === 1" >
            <h4 class="title text-center">{{project_1}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_logiciel" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Projet industriel de 6 mois pour conception et installation à l'entreprise Constellium C-TEC</li>
              <li>Conception complète d'une application C#/WPF pour ordinateur tactile Windows 10</li>
              <li>Formulaire numérique pour assurer un suivi de processus entre plusieurs tablettes</li>
              <li>Synchronisation des données temps réel entre plusieurs tablettes</li>
              <li>Service après vente pour installation et maintenant au sein de l'entreprise</li>
            </ul>
            
          </div>
          <div v-else-if="project_index === 2">
            <h4 class="title text-center">{{project_2}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_ar" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Dans le projet d'une maîtrise recherche à Polytechnique Montréal</li>
              <li>Développement avec Unreal Engine 4 pour déploiement rapide en VR et/ou AR</li>
              <li>Conception et tests réalisés avec le laboratoire d'infographie et réalité virtuelle</li>
              <li>Utilisation du logiciel sur le casque AR Magic Leap 1</li>
              <li>Gestion d'un essaim de drones pour les situations d'urgence</li>
              <li>Interaction avec l'utilisation des mains dans un univers 3D</li>
            </ul>
          </div>
          <div v-else-if="project_index === 3">
            <h4 class="title text-center">{{project_3}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_discord" alt="Circle Image" class="img-circle rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Développement JavaScript avec Node.js pour un bot automatique sur les serveurs discords</li>
              <li>Gestion automatique de demande des tickets</li>
              <li>Redirection des acteurs selon l'ordre des demandes</li>
              <li>Intégration de fonctionnalités diverses (youtube, jeux, etc ...)</li>
            </ul>
          </div>
          <div v-else-if="project_index === 4">
            <h4 class="title text-center">{{project_4}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_hololens" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Echange temps réel de données entre plusieurs Hololens 1.0</li>
              <li>Centralisation sur un serveur avec BDD et serveur REST (Django/Python)</li>
              <li>Module de communication C++ sur Hololens</li>
            </ul>
          </div>
          <div v-else-if="project_index === 5">
            <h4 class="title text-center">{{project_5}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_entrepot" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Javascript et WebGL pour modéliser en 3D un entrepôt de bois</li>
              <li>Modèle 3D dynamique depuis une base de données</li>
            </ul>
          </div>
          <div v-else>
          </div>
          </div>
          <md-divider class="md-inset"></md-divider>
          <template class="Formations">
            <h3 class="title text-center">
              <md-icon class="md-size-1x">school</md-icon>
              <br>Formations
            </h3>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-25 ">
                <img :src="img_polymtl" class="rounded" alt="Circle rounded" /><br><br>
                <h4 class="text-center"><b> Maîtrise recherche XR (AR/VR) Polytechnique Montréal - 2018/2020</b></h4>
                <center><a href="https://www.polymtl.ca/rv/Activites/" target="_blank" class="text-center"> Laboratoire
                    d'infographie et réalité virtuelle (LIRV)</a></center>
                <h6 class="text-center"> GPA : 3.86/4.0</h6>
              </div>
              <md-divider class="md-inset"></md-divider>
              <div class="md-layout-item md-size-25">
                <img :src="img_esisar" class="rounded" /><br><br>
                <h4 class="text-center"><b> Ingénieur français - Institut National Polytechnique Grenoble - ESISAR
                  2013/2018</b></h4>
                <p class="text-center"> Filière Informatique, Réseaux et Cybersécurité</p>
                <h6 class="text-center"> GPA : 3.3/4.0</h6>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <template class="Experiences">
            <h3 class="title text-center">
              <md-icon class="md-size-1x">work_outline</md-icon>
              <br>Expériences professionnelles
            </h3>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-25 ">
                <img :src="img_boxmyjob" class="rounded" alt="Circle rounded" />
                <h4 class="text-center"><b>Stage technicien Boxmyjob 2015</b></h4>
                <p class="text-center">Première expérience professionnelle dans une start-up</p>
                <p class="text-center">XPath - Java</p>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_constellium" class="rounded"/>
                <h4 class="text-center"><b>Projet industriel ingénieur C-TEC Constellium 2017</b></h4>
                <p class="text-center">Conception déploiement et recette d'une application Windows 10</p>
                <p class="text-center">Service après vente chez le client</p>
                <p class="text-center">C#/WPF - Visual Studio - Génie logiciel</p>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_polymtl" class="rounded"/>
                <h4 class="text-center"><b>Stage ingénieur au LIRV Polytechnique Montréal</b></h4>
                <p class="text-center">Conception et développement d'une infrastructure pour la communication
                  temps
                  réel de casques AR Hololens entre eux</p>
                <center><a href="https://www.polymtl.ca/rv/Activites/" target="_blank" class="text-center"> Laboratoire
                    d'infographie et réalité virtuelle (LIRV)</a></center>
                <p class="text-center">Module de communication C++ - API Rest Django Python - BDD SQL - Modèle
                  3D
                  Javascript</p>
              </div>
            </div>
            <h3 class="title text-center">
              Autres expériences
            </h3>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-30 ">
                <h4 class="text-center"><b>Chargé de laboratoire – Correcteur d’examens</b></h4>
                <p class="text-center">Gestion des étudiants en laboratoire du cours INF2705 à Polytechnique
                  Montréal (Infographie)</p>
                <p class="text-center">Gestions des étudiants sur le laboratoire et correction des sujets</p>
                <p class="text-center">Correction d’examens pour le cours INF1005C - Programmation procédurale
                </p>
              </div>
              <div class="md-layout-item md-size-30">
                <h4 class="text-center"><b>Implication sociale dans le milieu étudiant et professionnel</b></h4>
                <p class="text-center">Président et gestion d'une association étudiante pour un mandat annuel.
                  Implication étudiante depuis 6 années consécutives</p>
                <p class="text-center">Organisation et planification d’événements allant jusqu’à 600 personnes
                </p>
                <p class="text-center">Gestion d’équipes allant jusqu’à 30 personnes, mise en place
                  d'afterwork</p>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <template class="Competences">
            <h3 class="title text-center">
              <md-icon class="md-size-1x">list_alt</md-icon>
              <br>Compétences
            </h3>
            <div class="elevation-demo">
              <md-card class="skill">
                <h6 class="text-center">Langages de programmation:</h6>
                <md-card-content>
                  <ul>
                    <li>C / C++ / C#</li>
                    <li>Java</li>
                    <li>HTML / CSS / JavaScript</li>
                    <li>Python</li>
                    <li>Unix / Bash</li>
                  </ul>
                </md-card-content>
              </md-card>
              <md-card class="skill">
                <h6 class="text-center">Notions spécifiques:</h6>
                <md-card-content>
                  <ul>
                  <li>Génie logiciel</li>
                  <li>Réalité augmentée et virtuelle (XR)</li>
                  <li>Cybersécurité logiciels et réseaux</li>
                  <li>Git</li>
                  <li>Amazon web services</li>
                  <li>Système réparti, réplication, cloud</li>
                  <li>IA / Apprentissage machine</li>
                  <li>Infographie</li>
                  <li>Gestion de base de données</li>
                  <li>Administration réseaux</li>
                  <li>Jeux vidéo</li>
                  <li>Multimédia</li>
                </ul>
                </md-card-content>
              </md-card>
              <md-card class="skill">
                <h6 class="text-center">Logiciels:</h6>
                <md-card-content>
                  <ul>
                    <li>Visual Studio 2019</li>
                    <li>Unreal Engine 4</li>
                    <li>PyCharm</li>
                    <li>Unity</li>
                </ul>
                </md-card-content>
              </md-card>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <md-button class="md-raised ml-auto mr-auto md-primary" @click="isHidden = !isHidden">Contact et informations
          </md-button>
          <h5 v-if="!isHidden" class="mr-auto ml-auto">
              <b>Courriel :</b> <a href="mailto: naser.dany.0795@gmail.com">naser.dany.0795[at]gmail.com</a><br>
              <b>Langues :</b> Français (native) - Anglais (intermédiaire)<br>
              <b>Permis voiture :</b> B (européen)<br>
              <b>Nationalité :</b> Française<br>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";

export default {
  name: 'indexfr',
  components: {
     
},

  bodyClass: "profile-page",
  data() {
    return {
      isHidden: true,
      project_index: 1,
      project_1:"Formulaire numérique partagé Windows 10 (C#/WPF)",
      project_2:"Gestion d'un essaim de drones en AR",
      project_3:"Bot Discord pour gestion de tickets",
      project_4:"Serveur REST, BDD et module de communication pour synchronisation Hololens 1.0",
      project_5:"Modélisation 3D d'un entrepôt depuis une BDD",
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default:  require("@/assets/img/dany_cv/image_dany.jpg")
    },
    img_esisar: {
      type: String,
      default: require("@/assets/img/dany_cv/esisarlogo.png")
    },
    img_polymtl: {
      type: String,
      default: require("@/assets/img/dany_cv/polylogo.png")
    },
    img_constellium: {
      type: String,
      default: require("@/assets/img/dany_cv/constelliumlogo.png")
    },
    img_logiciel: {
      type: String,
      default: require("@/assets/img/dany_cv/image_logiciel.jpg")
    },
    img_boxmyjob: {
      type: String,
      default: require("@/assets/img/dany_cv/boxmyjoblogo.png")
    },
    img_entrepot: {
      type: String,
      default: require("@/assets/img/dany_cv/entrepot_bois.png")
    },
    img_discord: {
      type: String,
      default: require("@/assets/img/dany_cv/discord_bot.png")
    },
    img_ar: {
      type: String,
      default: require("@/assets/img/dany_cv/xr_image.jpg")
    },
    img_hololens: {
      type: String,
      default: require("@/assets/img/dany_cv/stage_hololens.jpg")
    }
  },
  methods:{
    see_project: function (index) {
          // `this` inside methods points to the Vue instance
          this.project_index = index
          document.getElementById('projet').scrollIntoView({ behavior: 'smooth' })
    }

  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
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
    width: 250px;
    height: 200px;
    margin: 24px;
    display: flex;
    align-items: center;
}

.md-card {
    width: 250px;
    height: 200px;
    margin: 24px;
    display: flex;
    align-items: center;
    
}

.md-layout-item{
  height: auto;
  margin: 15px;
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
  margin: 30px;
  justify-content: center;
  
}

[class*="skill"] {
    width: 270px;
    height: auto;
    margin: 12px;
    display: inline-block;
  }

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }

  
}
</style>
