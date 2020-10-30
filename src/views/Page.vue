<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Dany Naser Addin</h3>
                  <h6>M. Sc. A. et Ing. en génie informatique et logiciel</h6>
                  <i class="material-icons">sports_esports</i>
                  <i class="material-icons">laptop</i>
                  <i class="material-icons">airplanemode_active</i>
                  <i class="material-icons">local_movies</i>
                  <i class="material-icons">free_breakfast</i>
                  <i class="material-icons">fitness_center</i>
                  <i class="material-icons">sports_bar</i>
                  <i class="material-icons">sports_football</i>
                  <i class="material-icons">sports_tennis</i>
                  <i class="material-icons">music_note</i>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center"><script type="application/javascript" defer src="alert();"></script>
            <p>
              Jeune français de 25 ans diplômé de Polytechnique Montréal (Canada) et Polytechnique Grenoble (France), je suis à la recherche d'un emploi temps plein pour commencer ma carrière professionnelle.
            </p>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Formations', 'Expériences', 'Compétences']"
              :tab-icon="['school', 'work_outline', 'list_alt']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="text-center">
                  <h4>
                    Obtention des diplômes suivants:
                  </h4>
                </div>
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
                    <h4 class="text-center"> Ingénieur français - Institut National Polytechnique Grenoble - ESISAR 2013/2018</h4>
                    <h6 class="text-center"> Filière Informatique, Réseaux et Cybersécurité</h6>
                    <h6 class="text-center"> GPA : 3.3/4.0</h6>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <h4 class="text-center">
                  Expériences professionnelles effectuées :
                </h4>
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
                    <h6 class="text-center">Conception et développement d'une infrastructure pour la communication temps
                      réel de casques AR Hololens entre eux</h6>
                    <center><a href="https://www.polymtl.ca/rv/Activites/" class="text-center"> Laboratoire
                        d'infographie et réalité virtuelle (LIRV)</a></center>
                    <p class="text-center">Module de communication C++ - API Rest Django Python - BDD SQL - Modèle 3D
                      Javascript</p>
                  </div>
                </div>
                <h4 class="text-center">
                  Autres expériences:
                </h4>
                <div class="md-layout md-gutter md-alignment-top-center ">
                  <div class="md-layout-item md-size-30 ">
                  <h6 class="text-center">Chargé de laboratoire – Correcteur d’examens</h6>
                    <p class="text-center">Gestion des étudiants en laboratoire du cours INF2705 à Polytechnique Montréal (Infographie)</p>
                    <p class="text-center">Gestions des étudiants sur le laboratoire et correction des sujets.</p>
                    <p class="text-center">Correction d’examens pour le cours INF1005C - Programmation procédurale</p>
                  </div>
                  <div class="md-layout-item md-size-30">
                    <h6 class="text-center">Implication sociale dans le milieu étudiant et professionnel</h6>
                    <p class="text-center">Président et gestion d'une association étudiante pour un mandat annuel. Implication étudiante depuis 6 années consécutives</p>
                    <p class="text-center">Organisation et planification d’événements allant jusqu’à 600 personnes</p>
                    <p class="text-center">Gestion d’équipes allant jusqu’à 30 personnes, mise en place d'afterwork.</p>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                 <h4 class="text-center">
                  Liste des compétences apprises:
                </h4>
                <div class="md-layout md-gutter md-alignment-top-center  ">
                  <div class="md-layout-item md-size-30">
                    <h6>Langages de programmation:</h6>
                    <ul>
                      <li>C</li>
                      <li>C++</li>
                      <li>C#</li>
                      <li>Java</li>
                      <li>HTML / CSS / JavaScript</li>
                      <li>Python</li>
                      <li>Unix / Bash</li>
                    </ul>
                  </div>
                  <div class="md-layout-item md-size-30">
                    <h6>Notions spécifiques:</h6>
                    <ul>
                      <li>Gestion de base de données</li>
                      <li>Génie logiciel</li>
                      <li>Administration réseaux</li>
                      <li>Système réparti, réplication, cloud</li>
                      <li>IA / Apprentissage machine</li>
                      <li>Cybersécurité logiciels et réseaux</li>
                      <li>Infographie</li>
                      <li>Réalité augmentée et virtuelle (XR)</li>
                      <li>Jeux vidéo</li>
                      <li>Multimédia</li>
                    </ul>
                  </div>
                  <div class="md-layout-item md-size-30">
                    <h6>Logiciels:</h6>
                    <ul>
                      <li>Unity</li>
                      <li>Unreal Engine 4</li>
                      <li>Visual Studio 2019</li>
                      <li>PyCharm</li>
                    </ul>
                  </div>
                </div>
              </template>
              </tabs>
              </div>
          <md-button class="md-raised ml-auto mr-auto md-primary" @click="isHidden = !isHidden">Contact et informations</md-button>
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
  name: 'LayoutHorizontalResponsive',
  components: {
    Tabs 
},
  bodyClass: "profile-page",
  data() {
    return {
      isHidden: true,
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
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
