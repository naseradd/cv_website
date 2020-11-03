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
                  <h6>M. Sc. A. et Ing. en génie informatique et logiciel</h6>
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
          <div class="description text-center">
            <script type="application/javascript" defer src="alert();"></script>
            <p>
              Jeune français de 25 ans diplômé de Polytechnique Montréal (Canada) et Polytechnique Grenoble (France), je
              suis à la recherche d'un emploi temps plein pour commencer ma carrière professionnelle.
            </p>
          </div>
          <template class="Projet">
            <div class="elevation-demo">
              <div v-on:click="project_index=1">
                <md-card md-with-hover class="md-elevation-8 text-center" ><md-ripple>
                  <div class="case" vertical-align: middle>
                    <i class="fab fa-windows fa-5x"></i><br><br>
                    <span>{{project_1}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="project_index=2">
                <md-card md-with-hover class="md-elevation-8 text-center" v-on:click="project_index=2"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <md-icon class="md-size-4x">panorama_horizontal</md-icon><br><br>
                    <span>{{project_2}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="project_index=3">
                <md-card md-with-hover class="md-elevation-8 text-center"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <i class="fab fa-discord fa-5x"></i><br><br>
                    <span>{{project_3}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="project_index=4">
                <md-card md-with-hover class="md-elevation-8 text-center"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <md-icon class="md-size-4x md-font">http</md-icon><br>
                    <span>{{project_4}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
              <div v-on:click="project_index=5">
                <md-card md-with-hover class="md-elevation-8 text-center"><md-ripple>
                  <div class="case" vertical-align: middle>
                    <i class="fas fa-cubes fa-5x"></i><br><br>
                    <span>{{project_5}}</span>
                  </div></md-ripple>
                </md-card>
              </div>
            </div>
          </template>
          <div class="container">
          <div v-if="project_index === 1" >
            <h4 class="title text-center">{{project_1}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_logiciel" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" />
            </div>
            
            <ul>
              <li>Projet industriel de 6 mois pour livraison et recette a l'entreprise Constellium C-TEC</li>
              <li>Conception complète d'une application C#/WPF pour ordinateur tactile Windows 10</li>
              <li>Cahier des charges et recette directement à l'entreprise</li>
              <li>Service après vente pour installation et maintenant au sein de l'entreprise</li>
            </ul>
            
          </div>
          <div v-else-if="project_index === 2">
            <h4 class="title text-center">{{project_2}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_ar" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" />
            </div>
            <ul>
              <li>Dans le projet d'une maitrise recherche à Polytechnique Montréal</li>
              <li>Développement avec Unreal Engine 4 pour déploiement en VR et AR</li>
              <li>Interaction avec l'utilisation des mains dans un univers 3D</li>
              <li>Assistance en réalité augmentée dans les situations d'urgence</li>
            </ul>
          </div>
          <div v-else-if="project_index === 3">
            <h4 class="title text-center">{{project_3}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_discord" alt="Circle Image" class="img-circle rounded"
                :class="{ 'responsive-image': false }" />
            </div>
            <ul>
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
                :class="{ 'responsive-image': false }" />
            </div>
            <ul>
              <li>Echange temps réel de données entre plusieurs Hololens 1.0</li>
              <li>Centralisation sur un serveur avec BDD et serveur REST (Django/Python)</li>
              <li>Module de communication C++ sur Hololens</li>
            </ul>
          </div>
          <div v-else-if="project_index === 5">
            <h4 class="title text-center">{{project_5}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_entrepot" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" />
            </div>
            <ul>
              <li>Javascript et WebGL pour modéliser en 3D un entrepôt de bois</li>
              <li>Modèle 3D dynamique depuis une base de données</li>
            </ul>
          </div>
          <div v-else>
          </div>
          </div>
          <md-divider class="md-inset"></md-divider>
          <template class="Formations">
            <h2 class="title text-center">
              <md-icon class="md-size-2x">school</md-icon>
              <br>Formations
            </h2>
            <div class="md-layout md-gutter md-alignment-center-space-between ">
              <div class="md-layout-item md-size-30 ">
                <img :src="img_polymtl" class="rounded" alt="Circle rounded" />
                <h4 class="text-center"> Maîtrise recherche XR (AR/VR) Polytechnique Montréal - 2018/2020</h4>
                <center><a href="https://www.polymtl.ca/rv/Activites/" class="text-center"> Laboratoire
                    d'infographie et réalité virtuelle (LIRV)</a></center>
                <h6 class="text-center"> GPA : 3.86/4.0</h6>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_esisar" class="rounded" />
                <h4 class="text-center"> Ingénieur français - Institut National Polytechnique Grenoble - ESISAR
                  2013/2018</h4>
                <h6 class="text-center"> Filière Informatique, Réseaux et Cybersécurité</h6>
                <h6 class="text-center"> GPA : 3.3/4.0</h6>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <template class="Experiences">
            <h2 class="title text-center">
              <md-icon class="md-size-2x">work_outline</md-icon>
              <br>Expériences professionnelles
            </h2>
            <div class="md-layout md-gutter md-alignment-center-space-between ">
              <div class="md-layout-item md-size-30 ">
                <img :src="img_boxmyjob" class="rounded" alt="Circle rounded" />
                <h4 class="text-center">Stage technicien Boxmyjob 2015</h4>
                <h6 class="text-center">Première expérience professionnelle dans une start-up</h6>
                <p class="text-center">XPath - Java</p>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_constellium" class="rounded" />
                <h4 class="text-center">Projet industriel ingénieur C-TEC Constellium 2017</h4>
                <h6 class="text-center">Conception déploiement et recette d'une application Windows 10</h6>
                <h6 class="text-center">Service après vente chez le client</h6>
                <p class="text-center">C#/WPF - Visual Studio - Génie logiciel</p>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_polymtl" class="rounded" />
                <h4 class="text-center">Stage ingénieur au LIRV Polytechnique Montréal</h4>
                <h6 class="text-center">Conception et développement d'une infrastructure pour la communication
                  temps
                  réel de casques AR Hololens entre eux</h6>
                <center><a href="https://www.polymtl.ca/rv/Activites/" class="text-center"> Laboratoire
                    d'infographie et réalité virtuelle (LIRV)</a></center>
                <p class="text-center">Module de communication C++ - API Rest Django Python - BDD SQL - Modèle
                  3D
                  Javascript</p>
              </div>
            </div>
            <h4 class="text-center">
              Autres expériences:
            </h4>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-30 ">
                <h6 class="text-center">Chargé de laboratoire – Correcteur d’examens</h6>
                <p class="text-center">Gestion des étudiants en laboratoire du cours INF2705 à Polytechnique
                  Montréal (Infographie)</p>
                <p class="text-center">Gestions des étudiants sur le laboratoire et correction des sujets.</p>
                <p class="text-center">Correction d’examens pour le cours INF1005C - Programmation procédurale
                </p>
              </div>
              <div class="md-layout-item md-size-30">
                <h6 class="text-center">Implication sociale dans le milieu étudiant et professionnel</h6>
                <p class="text-center">Président et gestion d'une association étudiante pour un mandat annuel.
                  Implication étudiante depuis 6 années consécutives</p>
                <p class="text-center">Organisation et planification d’événements allant jusqu’à 600 personnes
                </p>
                <p class="text-center">Gestion d’équipes allant jusqu’à 30 personnes, mise en place
                  d'afterwork.</p>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <template class="Competences">
            <h2 class="title text-center">
              <md-icon class="md-size-2x">list_alt</md-icon>
              <br>Compétences
            </h2>
            <div class="md-layout md-gutter md-alignment-top-center  ">
              <div class="md-layout-item md-size-30">
                <h6>Langages de programmation:</h6>
                <ul>
                  <li>C / C++ / C#</li>
                  <li>Java</li>
                  <li>HTML / CSS / JavaScript</li>
                  <li>Python</li>
                  <li>Unix / Bash</li>
                </ul>
              </div>
              <div class="md-layout-item md-size-30">
                <h6>Notions spécifiques:</h6>
                <ul>
                  <li>Génie logiciel</li>
                  <li>Réalité augmentée et virtuelle (XR)</li>
                  <li>Cybersécurité logiciels et réseaux</li>
                  <li>Système réparti, réplication, cloud</li>
                  <li>IA / Apprentissage machine</li>
                  <li>Infographie</li>
                  <li>Gestion de base de données</li>
                  <li>Administration réseaux</li>
                  <li>Jeux vidéo</li>
                  <li>Multimédia</li>
                </ul>
              </div>
              <div class="md-layout-item md-size-30">
                <h6>Logiciels:</h6>
                <ul>
                  <li>Visual Studio 2019</li>
                  <li>Unreal Engine 4</li>
                  <li>PyCharm</li>
                  <li>Unity</li>
                </ul>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <md-button class="md-raised ml-auto mr-auto md-info" @click="isHidden = !isHidden">Contact et informations
          </md-button>
          <h5 v-if="!isHidden" class="mr-auto ml-auto">
            <ul>
              <li><b>Courriel :</b> <a href="mailto: naser.dany.0795@gmail.com">naser.dany.0795[at]gmail.com</a></li>
              <li><b>Langues :</b> Français (native) - Anglais (intermediaire)</li>
              <li><b>Permis voiture :</b> B (européen)</li>
              <li><b>Nationalité :</b> Française</li>
            </ul>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";

export default {
  name: 'ElevationExample',
  components: {
     
},
  bodyClass: "profile-page",
  data() {
    return {
      isHidden: true,
      project_index: 0,
      project_1:"Conception d'un logiciel Windows 10",
      project_2:"Conception d'une application AR Magic Leap 1",
      project_3:"Bot Discord pour gestion de tickets",
      project_4:"Serveur REST, BDD et module de communication inter-connectivité Hololens 1.0",
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
      default: require("@/assets/img/dany_cv/image_dany.jpg")
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
.section {
  padding: 0;
}

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

.md-button {
  margin: 24px;
}

[class*="case"] {
  margin: 5px;
  justify-content: center;
  
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
