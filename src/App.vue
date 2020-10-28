<template>
  <div id="app">
    <el-container>
      <el-header>Dany NASER ADDIN
        <el-button id="CV_button" size="small" v-on:click="cv_link" round>Curriculum Vitae
          <i class="el-icon-document"></i>
        </el-button>
        <a href="https://www.linkedin.com/in/dany-naser-addin-116163101" target="_blank">
          <el-button id="linkedin_button" size="small" round>
            <img src="./assets/linkedin-logo.png">
          </el-button>
        </a>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <el-menu :default-openeds="['1']">
            <el-menu-item index="1" @click="loadFormations">
              <i class="el-icon-arrow-right"></i>
              <span>Formations</span>
            </el-menu-item>
            <el-menu-item index="2" @click="loadProjects">
              <i class="el-icon-arrow-right"></i>
              <span>Projets professionels</span>
            </el-menu-item>
            <el-menu-item index="3" @click="loadSkills">
              <i class="el-icon-arrow-right"></i>
              <span>Compétences</span>
            </el-menu-item>
            <el-menu-item index="4" @click="loadAsso">
              <i class="el-icon-arrow-right"></i>
              <span>Associatifs</span>
            </el-menu-item>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-info"></i>Informations complémentaires</template>
              <el-menu-item-group>
                <template slot="title">
                  <ul>
                    <li v-for="info in infos">
                      {{info.text}}
                    </li>
                  </ul>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-message"></i>Contact</template>
              <el-menu-item-group>
                <template slot="title">
                  <ul>
                    <li v-for="info in contacts">
                      {{info.text}}
                    </li>
                  </ul>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <transition name="slide-fade" mode="out-in">
            <component v-bind:is="view"></component>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import FormationComponent from './Formation.vue'
  import ProjectsComponent from './Projects.vue'
  import AssoComponent from './Asso.vue'
  import SkillsComponent from './Skills.vue'
  export default {
    data() {
      return {
        view: ProjectsComponent,
        infos: [{
          text: 'Permis voiture B '
        }, {
          text: 'Nationalité : Française'
        }, {
          text: 'Langue : Français , Anglais'
        }, {
          text: 'TOEIC : 860'

        }],
        contacts: [{
          text: 'Mail address : naser.dany[at]hotmail.fr'
        }]
      }
    },
    components: {
      FormationComponent,
      ProjectsComponent,
      AssoComponent,
      SkillsComponent
    },
    methods: {
      startHacking() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'C\'est l\'heure de faire du sale !',
          duration: 2000
        })
      },
      loadFormations() {
        this.view = FormationComponent;
      },
      loadProjects() {
        this.view = ProjectsComponent;
      },
      loadSkills() {
        this.view = SkillsComponent;
      },
      loadAsso() {
        this.view = AssoComponent;
      },
      cv_link() {
        window.open("https://1drv.ms/b/s!AjsBwco3oDSsnGb76NMhfgpxiJ6j")
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: Roboto;
    src: url(./assets/Roboto-Regular.ttf);
  }

  @font-face {
    font-family: RobotolightItalic;
    src: url(./assets/Roboto-LightItalic.ttf);
  }

  .el-header,
  .el-footer {
    font-family: RobotolightItalic;
    background-color: #C0C4CC;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    font-family: Roboto;
    background-color: #DCDFE6;
    color: #DCDFE6;
    text-align: left;
    line-height: 200px;
    height: 1000px;
  }

  .el-submenu__title,
  .el-menu-item {
    color: #303133;
    background-color: #DCDFE6;
    font-size: 14px;
  }
  .el-menu-item-group__title{
  font-size: 15px;

}

  .el-main {
    font-family: Roboto;
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    height: 1000px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  #linkedin_button {
    vertical-align: middle;
    margin-left: 3px;
  }

  #CV_button {
    font-family: RobotolightItalic;
    font-size: 15px;
    vertical-align: middle;
    margin-left: 75%;
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }

  .slide-fade-leave-active {
    transition: all .5s ease;
  }

  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */

    {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
