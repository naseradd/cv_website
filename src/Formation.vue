<template>
  <div id="formation">
    <div class="Block">
      <h1>Présentation :</h1>
      
      <div class="box">
        <img style="vertical-align:middle;" src="./assets/portrait.jpg">
        <span style="width:75%;margin: 2%;">
          <h2>Dany NASER ADDIN</h2>
          <h4 class="sub">Etudiant francais de 23 ans<br>Ingénieur dans le domaine du génie informatique et logiciel</h4>
          <p>Bonjour, je m'appelle Dany NASER ADDIN et je suis ingénieur dans le domaine du génie logiciel , réseaux et cybersécurité. 
            Après avoir fini mon parcours ingénieur au sein du groupe Grenoble INP, je voudrais orienter dans le domaine de l'infographie 
            et de la réalité augmentée/virtuelle pour élargir mes compétences. Je prolonge donc mes études à Polytechnique Montréal.</p>
        </span>
      </div>

      </div>
      <div class="Block">
        <h1>Formation actuelle :</h1>
        <div class="box2">
          <h3>Master - Maitrîse recherche</h3>
          <h4 class="sub">Laboratoire d'infographie et réalité virtuelle</h4>
          <img src="./assets/polylogo.png"><br>
          <span>
            <el-tag type="info" style="font-size:15px;margin:2%;">Septembre 2018 - Septembre 2020</el-tag>
            <p>Je vais effectuer une maitrise recherche d'une durée de 666 durant lalalal</p>
          </span>
        </div>
      </div>
      <div class="Block">
        <h1>Parcours étudiant :</h1>
        <div class="box2">
          <h3>Ingénierie en Informatique et Systèmes Avancées</h3>
          <h4 class="sub">Institut national polytechnique de Grenoble - Esisar
            <br> Filière IR&C : Informatique, Réseaux et Cybersécurité
          </h4>
          <img src="./assets/esisarlogo.png"><br>
          <span>
            <el-tag type="info" style="font-size:15px;margin:2%;">Septembre 2013 - Septembre 2018</el-tag>
            <p>J'ai réalisé une classe préparatoire intégré ainsi qu'une formation ingénieur à l'Esisar pour une durée total de 5 ans.</p>
          </span>
        </div>
      </div>
      <div class="Block" id="Link">
        <div class="box">
          <h1 style="margin-right:2%;">Liens : </h1>
          <a style="margin-right:2%;" href="http://esisar.grenoble-inp.fr/accueil/" target="_blank">
            <el-button  id="linkedin_button" size="small" round>
              <img src="./assets/esisarlogomini.png">
            </el-button>
          </a>
          <a href="http://www.polymtl.ca/" target="_blank">
            <el-button style="margin-right:2%;" id="linkedin_button" size="small" round>
              <img src="./assets/polylogomini.png">
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
.box {
   display: flex;
   align-items:center;
   margin: 2%;
}

.box2{

  margin: 2%;

}

  


</style>