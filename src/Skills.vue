<template>
  <div id="skills">
    <div class="skills">
    <h1>Compétences</h1>
      <div class="sBlock">
        <h1>Domaines</h1>
        <ul>
          <li>Administrations Réseaux (4 ans)</li>
          <li>Gestion de base de données (4 ans)</li>
          <li>Administrations Système (3 ans)</li>
          <li>Algorithme avancées (3 ans)</li>
          <li>Sécurité informatique, réseaux et logiciel (3 ans)</li>
          <li>Cybersécurité (2 ans)</li>
          <li>Génie logiciel (2 ans)</li>
          <li>Technologie du multimédia (1 an)</li>
          <li>Systèem réparties, réplication, cloud (6 mois)</li>
          <li>Infographie (6 mois)</li>
          <li>IHM : Interface homme machine (6 mois)</li>

          <li> (2 ans)</li>
        </ul>
      </div>
      <div class="sBlock">
        <h1>Langages de programmation</h1>
        <ul>
          <li>Unix/Bash (5 ans)</li>
          <li>Java (3 ans)</li>
          <li>C (2 ans)</li>
          <li>C# (1 an)</li>
          <li>C++ (6 mois)</li>
          <li>JS / CSS / HTML (10 mois)</li>
        </ul>
      </div>
    </div>
    <div class="solo_Block">
      <h1>Autres</h1>
      <ul>
        <li>Microsoft Office (6 ans)</li>
        <li>Visual Studio (3 ans)</li>
        <li>Web Selenium - Xpaths (1 an)</li>
        <li>Unity (6 mois)</li>
        <li>Jeux vidéo (6 mois)</li>
        <li>Framework Django - Python (6 mois)</li>
        <li>Librairie Three.js - Javascript (3 mois)</li>
        <li>Framework Vue.js - Javascript (3 mois)</li>
      </ul>

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
  #content {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }

  #header_page {
    font-family: Helvetica, sans-serif;
    text-align: center;
    color: white;
    background: #409EFF;

  }
  .skills{
    display: flex;
  }
  .sBlock{
    border-bottom:1px dotted rgba(0, 0, 0, 0.511);
    margin: 3%;
    width: 50%;
    text-align: left;

  }
  .solo_Block{
    border-top:1px dotted rgba(0, 0, 0, 0.511);
    margin: 3%;
    text-align: center;

  }
</style>
