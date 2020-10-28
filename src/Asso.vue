<template>
  <div id="asso">
    <div class="Block">
      <div class="box">
        <span style="width:75%;">
          <h2>Cercle des élèves de l'Esisar</h2>

          <h4 class="sub">BDE : Bureau des élèves
            <br>
            <br>Historique des postes</h4>
          <ul>
            <li>
              <b>Secrétaire</b> pour le mandat 2014 - 2015</li>
            <li>
              <b>Trésorier</b> pour le mandat 2015 - 2016</li>
            <li>
              <b>Président</b> pour le mandat 2016 - 2017</li>
          </ul>

          <p>Je me suis investie pendant 3 ans dans le milieu associatif pour pouvoir élargir mes compétences et participer
            à la vie associative de Valence. J'ai donc organiser plusieurs types d'événement comme les week end d'intégrations,
            des évenements caritatifs, remises de diplomes et plusieurs participations au Challenge de l'étudiant de la ville
            de Valence.</p>
        </span>
        <img style="vertical-align:middle;margin: 2%;" src="./assets/cercle.png">

      </div>
      <p style="text-align:center;">Voici quelques images </p>
      <el-carousel indicator-position="outside" class="box2" style="height:100%;width:50%;">
        <el-carousel-item>
          <img style="align-items:center;display: flex;height:100%;" src="./assets/cercle1.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img style="align:middle;display: flex;height:100%;" src="./assets/cercle.png">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>


<script>
  export default {
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
.Block{
  border-bottom:1px dotted rgba(0, 0, 0, 0.511);
 margin-bottom: 3%;
 
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  


</style>