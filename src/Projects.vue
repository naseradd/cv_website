<template>
  <div id="projects">
    <div class="Block">
      <h1>Stage ingénieur / Projet de fin d'études</h1>
      <img style="vertical-align:middle;margin: 2%;" src="./assets/polylogo.png">
      <div class="box">
        <span>
          <el-tag type="info" style="font-size:15px;margin:0%;">Février 2018 - Juillet 2018</el-tag>
          <el-tag type="info" style="font-size:15px;margin-left:2%;">Montréal</el-tag>
          <h4 class="sub">Laboratoire de recherche en inforgraphie et Réalité Virtuelle<br>Polytechnique Montréal</h4>
          <ul>
            <li>Application de réalité augmentée dans usine de traitement de bois avec le casque Hololens de Microsoft</li>
            <li>Compétences en réseaux, développement logiciel et infographie </li>
          </ul>

        </span>

      </div>
    </div>
    <div class="Block">
      <h1>Projet industriel Grenoble INP Esisar / Junior Conseil</h1>
      <img style="vertical-align:middle;margin: 2%;" src="./assets/constelliumlogo.png">
      <div class="box">
        <span>
          <el-tag type="info" style="font-size:15px;margin:0%;">Janvier 2017 - Juillet 2017</el-tag>
          <el-tag type="info" style="font-size:15px;margin-left:2%;">Grenoble</el-tag>
          <h4 class="sub">C-TEC Constellium</h4>
          <ul>
            <li>Réalisation et développement d’une application tablette Windows 10 (C#/WPF)</li>
            <li>Service après-vente du produit et installation réseaux sur site. </li>
          </ul>

        </span>

      </div>
    </div>
    <div class="Block">
      <h1>Stage technicien</h1>
      <img style="vertical-align:middle;margin: 2%;" src="./assets/boxmyjoblogo.png">
      <div class="box">
        <span>
          <el-tag type="info" style="font-size:15px;margin:0%;">Juin 2015 - Juillet 2015</el-tag>
          <el-tag type="info" style="font-size:15px;margin-left:2%;">Toulouse</el-tag>
          <h4 class="sub">Boxmyjob</h4>
          <ul>
            <li>Amélioration d’un add-on navigateur</li>
            <li>Automatisation de test pour une plateforme WEB.</li>
          </ul>

        </span>

      </div>


    </div>
    <div class="Block" >
        <div class="box">
          <h1 style="margin-right:2%;">Liens : </h1>
          <a href="http://www.polymtl.ca/" target="_blank">
            <el-button style="margin-right:2%;" id="linkedin_button" size="small" round>
              <img src="./assets/polylogomini.png">
            </el-button>
          </a>
          <a style="margin-left:2%;" href="https://www.constellium.com/c-tec-voreppe-france-aluminium-research-and-development-center-constellium" target="_blank">
            <el-button  id="linkedin_button" size="small" round>
              <img src="./assets/constelliumlogomini.png">
            </el-button>
          </a>
          <a style="margin-left:2%;" href="https://boxmyjob.com/" target="_blank">
            <el-button  id="linkedin_button" size="small" round>
              <img src="./assets/boxmyjoblogomini.png">
            </el-button>
          </a>
          <span>
            
          </span>
        </div>
      </div>

  </div>



</template>


<script>
  export default {
    data() {
      return {
        titre: 'Ceci est un titre !'
      }
    },
    methods: {
      startHacking() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'C\'est l\'heure de faire du sale !',
          duration: 2000
        })
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

  .sub{
    font-family: RobotolightItalic;
  }


.box2{

  margin: 2%;

}
.Block{
  border-bottom:1px dotted rgba(0, 0, 0, 0.511);
 margin-bottom: 3%;
 
}
  


</style>