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
              <md-content class="md-elevation-8 text-center">
                <div class="case" vertical-align: middle>
                  <i class="fab fa-windows fa-5x"></i><br><br>
                  <span>Conception d'un logiciel C#/WPF Windows 10</span>
                </div>
              </md-content>
              <md-content class="md-elevation-8 text-center">
                <div class="case" vertical-align: middle>
                  <md-icon class="md-size-4x">panorama_horizontal</md-icon><br>
                  <span>Conception d'une application AR C++ pour Magic Leap 1 avec Unreal Engine 4 </span>
                </div>
              </md-content>
              <md-content class="md-elevation-8 text-center">
                <div class="case" vertical-align: middle>
                  <i class="fab fa-discord fa-5x"></i><br>
                  <span>Bot Discord Javascript pour gérer les questions dans un cours
                    de Polytechnique Montréal</span>
                </div>
              </md-content>
              <md-content class="md-elevation-8 text-center">
                <div class="case" vertical-align: middle>
                  <md-icon class="md-size-4x md-font">http</md-icon><br>
                  <span>Serveur REST (django/python), BDD et module de communication
                    C++ pour inter-connectivité Hololens 1.0</span>
                </div>
              </md-content>
              <md-content class="md-elevation-8 text-center">
                <div class="case" vertical-align: middle>
                  <i class="fas fa-cubes fa-5x"></i><br><br>
                  <span>Modélisation 3D (Javascript/WebGL) d'un entrepôt depuis une
                    BDD</span>
                </div>
              </md-content>
            </div>
          </template>
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
      isHidden: true
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
    img_boxmyjob: {
      type: String,
      default: require("@/assets/img/dany_cv/boxmyjoblogo.png")
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
