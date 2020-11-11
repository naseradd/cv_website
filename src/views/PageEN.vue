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
                  <h4><b>M. Sc. A. et Ing. in Software and Computer Science</b></h4>
                  Hobbies :
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
              25 year old french graduate of Polytechnique Montreal (Canada) and Polytechnique Grenoble (France),
              I am looking for a full time job to start my professional career.
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
              <li>6 months Industrial project for conception and installation at C-TEC Constellium company</li>
              <li>Conception from scratch of a C#/WPF application for Windows 10 tactile computer</li>
              <li>Digital form for process tracking between multiple devices</li>
              <li>Real-time data synchronization between multiple tablets</li>
              <li>After sales service for installation within the company</li>
            </ul>
            
          </div>
          <div v-else-if="project_index === 2">
            <h4 class="title text-center">{{project_2}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_ar" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>In a Master's research project at Polytechnique Montréal</li>
              <li>Development with Unreal Engine 4 for rapid VR and/or AR deployment</li>
              <li>Design and tests carried out with the computer graphics and virtual reality laboratory</li>
              <li>Using the software on the AR Magic Leap 1 headset</li>
              <li>Management of a swarm of UAVs for emergency situations</li>
              <li>Interaction with the use of hands in a 3D universe</li>
            </ul>
          </div>
          <div v-else-if="project_index === 3">
            <h4 class="title text-center">{{project_3}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_discord" alt="Circle Image" class="img-circle rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>JavaScript development with Node.js for an automatic bot on discord servers</li>
              <li>Automatic management of ticket requests</li>
              <li>Redirection of the actors according to the order of requests</li>
              <li>Integration of various features (youtube, games, etc ...)</li>
            </ul>
          </div>
          <div v-else-if="project_index === 4">
            <h4 class="title text-center">{{project_4}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_hololens" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Real-time data exchange between multiple Hololens 1.0</li>
              <li>Centralization on a server with Database and REST server (Django/Python)</li>
              <li>C++ communication module on Hololens</li>
            </ul>
          </div>
          <div v-else-if="project_index === 5">
            <h4 class="title text-center">{{project_5}}</h4>
            <div class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <img :src="img_entrepot" alt="Raised Image" class="img-raised rounded"
                :class="{ 'responsive-image': false }" /><br><br>
            </div>
            <ul class="md-layout-item md-size-40 md-xsmall-size-100 ml-auto mr-auto">
              <li>Javascript and WebGL to model a wood warehouse in 3D</li>
              <li>Dynamic 3D model from a databaseM</li>
            </ul>
          </div>
          <div v-else>
          </div>
          </div>
          <md-divider class="md-inset"></md-divider>
          <template class="Formations">
            <h3 class="title text-center">
              <md-icon class="md-size-1x">school</md-icon>
              <br>Studies
            </h3>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-25 ">
                <img :src="img_polymtl" class="rounded" alt="Circle rounded" /><br><br>
                <h4 class="text-center"><b> Master's degree in XR research (AR/VR) Polytechnique Montréal - 2018/2020</b></h4>
                <center><a href="https://www.polymtl.ca/rv/Activites/" target="_blank" class="text-center"> Computer graphics and virtual reality laboratory (LIRV)</a></center>
                <h6 class="text-center"> GPA : 3.86/4.0</h6>
              </div>
              <md-divider class="md-inset"></md-divider>
              <div class="md-layout-item md-size-25">
                <img :src="img_esisar" class="rounded" /><br><br>
                <h4 class="text-center"><b> French Engineer - Institut National Polytechnique Grenoble - ESISAR
                  2013/2018</b></h4>
                <p class="text-center">Computing, Networks and Cybersecurity</p>
                <h6 class="text-center"> GPA : 3.3/4.0</h6>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <template class="Experiences">
            <h3 class="title text-center">
              <md-icon class="md-size-1x">work_outline</md-icon>
              <br>Work experiences
            </h3>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-25 ">
                <img :src="img_boxmyjob" class="rounded" alt="Circle rounded" />
                <h4 class="text-center"><b>Technical Intern Boxmyjob 2015</b></h4>
                <p class="text-center">First professional experience in a start-up</p>
                <p class="text-center">XPath - Java</p>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_constellium" class="rounded"/>
                <h4 class="text-center"><b>Engineer industrial project C-TEC Constellium 2017</b></h4>
                <p class="text-center">Design, deployment and testing of a Windows 10 application</p>
                <p class="text-center">After-sales service at the customer's place</p>
                <p class="text-center">C#/WPF - Visual Studio - Software engineering</p>
              </div>
              <div class="md-layout-item md-size-25">
                <img :src="img_polymtl" class="rounded"/>
                <h4 class="text-center"><b>Engineer Intern at LIRV Polytechnique Montréal</b></h4>
                <p class="text-center">Design and development of an infrastructure for real-time communication of AR Hololens 1.0 with each other</p>
                <center><a href="https://www.polymtl.ca/rv/Activites/" target="_blank" class="text-center"> Computer graphics and virtual reality laboratory (LIRV)</a></center>
                <p class="text-center">C++ Communication module - API Rest Django Python - DB SQL - 3D Model - Javascript</p>
              </div>
            </div>
            <h3 class="title text-center">
              Other experiences
            </h3>
            <div class="md-layout md-gutter md-alignment-top-center ">
              <div class="md-layout-item md-size-30 ">
                <h4 class="text-center"><b>Laboratory assistant - Examination corrector</b></h4>
                <p class="text-center">Management of the laboratory students of the INF2705 course at Polytechnique Montreal (Computer Graphics)</p>
                <p class="text-center">Management of students in the laboratory and correction of subjects</p>
                <p class="text-center">Correction of exams for the course INF1005C - Procedural Programming</p>
              </div>
              <div class="md-layout-item md-size-30">
                <h4 class="text-center"><b>Social involvement in the student and professional environment</b></h4>
                <p class="text-center">President and management of a student association for an annual term. Student involvement for 6 consecutive years</p>
                <p class="text-center">Organization and planning of events for up to 600 people</p>
                <p class="text-center">Management of teams of up to 30 people, afterwork set up</p>
              </div>
            </div>
          </template>
          <md-divider class="md-inset"></md-divider>
          <template class="Competences">
            <h3 class="title text-center">
              <md-icon class="md-size-1x">list_alt</md-icon>
              <br>Skills
            </h3>
            <div class="elevation-demo">
              <md-card class="skill">
                <h6 class="text-center">Programming languages :</h6>
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
                <h6 class="text-center">Specific concepts :</h6>
                <md-card-content>
                  <ul>
                  <li>Software science</li>
                  <li>Augmented and virtual reality (XR)</li>
                  <li>Cybersecurity software and networks</li>
                  <li>Git</li>
                  <li>Amazon web services</li>
                  <li>Distributed system, replication, cloud</li>
                  <li>AI / Machine Learning</li>
                  <li>Computer graphics</li>
                  <li>Database management</li>
                  <li>Network administration</li>
                  <li>Video Games</li>
                  <li>Multimedia</li>
                </ul>
                </md-card-content>
              </md-card>
              <md-card class="skill">
                <h6 class="text-center">Software :</h6>
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
          <md-button class="md-raised ml-auto mr-auto md-primary" @click="isHidden = !isHidden">Contact & Information
          </md-button>
          <h5 v-if="!isHidden" class="mr-auto ml-auto">
              <b>Mail :</b> <a href="mailto: naser.dany.0795@gmail.com">naser.dany.0795[at]gmail.com</a><br>
              <b>Languages :</b> French (native) - English (mid-range)<br>
              <b>Car license :</b> B (european)<br>
              <b>Nationality :</b> French<br>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";

export default {
  name: 'indexen',
  components: {
     
},

  bodyClass: "profile-page",
  data() {
    return {
      isHidden: true,
      project_index: 1,
      project_1:"Windows 10 Shared Digital Form (C#/WPF)",
      project_2:"Management of a swarm of UAVs with AR",
      project_3:"Bot Discord for ticket management",
      project_4:"REST server, DB and communication module for Hololens 1.0 synchronization",
      project_5:"3D modeling of a warehouse from a database",
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
