<template class="Formations">
  <div>
    <div v-if="!isMobile" class="md-layout md-alignment-center md-column" >
      <div class="md-layout-item md-size-30">
        <img :src="img_polymtl" class="rounded" alt="Circle rounded" /><br /><br />
      </div>
      <div class="md-layout-item md-size-50">
        <h4>
          <b> M. Sc. A. Polytechnique Montréal</b>
        </h4>
        <a href="https://www.polymtl.ca/rv/Activites/" target="_blank" v-if="!isEnglish">
          Laboratoire d'infographie et réalité virtuelle (LIRV)</a
        >
        <a href="https://www.polymtl.ca/rv/Activites/" target="_blank" v-else>
          Computer graphics and virtual reality laboratory (LIRV)</a
        >
        <p v-if="!isEnglish">
          Maîtrise recherche à Polytechnique Montréal. Réalisation d'un projet de
          recherche en autonomie pendant 2 ans accompagné par un partenaire industriel
          pour mesurer l'efficacité de la réalité augmentée avec un casque pour contrôler des drones dans
          les situations d'urgence. Article scientifique en cours de soumission au journal de recherche Elsevier Computer & Graphics.
        </p>
        <p v-else>Master's degree in research at Polytechnique Montreal. Project of
          research in autonomy for 2 years accompanied by an industrial partner
          to measure the effectiveness of Augmented Reality with an headset to control drones in
          emergency situations. Scientific paper is being submitted to the research journal Elsevier Computer & Graphics.</p>
        <h6>GPA : 3.86/4.0</h6>
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Septembre 2018 - Décembre 2020</h5>
        <h5 v-else>September 2018 - December 2020</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="!isMobile" class="md-layout md-alignment-center md-column">
      <div class="md-layout-item md-size-30">
        <img :src="img_esisar" class="rounded" /><br /><br />
      </div>
      <div class="md-layout-item md-size-50">
        <h4>
          <b v-if="!isEnglish">
            Ing. B. Institut National Polytechnique Grenoble E.S.I.S.A.R.
          </b>
          <b v-else> Ing. B. Institut National Polytechnique Grenoble E.S.I.S.A.R. </b>
        </h4>
        <p v-if="!isEnglish">Filière Informatique, Réseaux et Cybersécurité</p>
        <p v-else>Computing, Networks and Cybersecurity</p>
        <p v-if="!isEnglish">Diplôme ingénieur français à Grenoble INP - Esisar incluant la classe préparatoire intégrée et le cycle ingénieur.</p>
        <p v-else>French engineering degree at Grenoble INP - Esisar including the integrated preparatory class and the engineering cycle.</p>
        <h6>GPA : 3.3/4.0</h6>
      </div>
      <div class="md-layout-item md-size-20">
        <h5 v-if="!isEnglish">Septembre 2013 - Août 2018</h5>
        <h5 v-else>September 2013 - August 2018</h5>
      </div>
    </div>
    <!-- MOBILE DISPLAY -->
    <div v-if="isMobile">
      <div class="md-layout-item">
        <img :src="img_polymtl" class="rounded" alt="Circle rounded" /><br /><br />
      </div>
      <div class="md-layout-item md-size-100">
        <h4>
          <b> M. Sc. A. Polytechnique Montréal</b>
        </h4>
        <a href="https://www.polymtl.ca/rv/Activites/" target="_blank" v-if="!isEnglish">
          Laboratoire d'infographie et réalité virtuelle (LIRV)</a
        >
        <a href="https://www.polymtl.ca/rv/Activites/" target="_blank" v-else>
          Computer graphics and virtual reality laboratory (LIRV)</a
        >
        <p v-if="!isEnglish">
          Maîtrise recherche à Polytechnique Montréal. Réalisation d'un projet de
          recherche en autonomie pendant 2 ans accompagné par un partenaire industriel
          pour mesurer l'efficacité de la réalité augmentée avec un casque pour contrôler des drones dans
          les situations d'urgence. Article scientifique en cours de soumission au journal de recherche Elsevier Computer & Graphics.
        </p>
        <p v-else>Master's degree in research at Polytechnique Montreal. Project of
          research in autonomy for 2 years accompanied by an industrial partner
          to measure the effectiveness of Augmented Reality with an headset to control drones in
          emergency situations. Scientific paper is being submitted to the research journal Elsevier Computer & Graphics.</p>
        <h6>GPA : 3.86/4.0</h6>
      </div>
      <div class="md-layout-item md-size-100">
        <h5 v-if="!isEnglish">Septembre 2018 - Décembre 2020</h5>
        <h5 v-else>September 2018 - December 2020</h5>
      </div>
    </div>
    <md-divider class="md-inset"></md-divider>
    <div v-if="isMobile">
      <div class="md-layout-item">
        <img :src="img_esisar" class="rounded" /><br /><br />
      </div>
      <div class="md-layout-item md-size-100">
        <h4>
          <b v-if="!isEnglish">
            Ing. B. Institut National Polytechnique Grenoble E.S.I.S.A.R.
          </b>
          <b v-else> Ing. B. Institut National Polytechnique Grenoble E.S.I.S.A.R. </b>
        </h4>
        <p v-if="!isEnglish">Filière Informatique, Réseaux et Cybersécurité</p>
        <p v-else>Computing, Networks and Cybersecurity</p>
        <p v-if="!isEnglish">Diplôme ingénieur français à Grenoble INP - Esisar incluant la classe préparatoire intégrée et le cycle ingénieur.</p>
        <p v-else>French engineering degree at Grenoble INP - Esisar including the integrated preparatory class and the engineering cycle.</p>
        <h6>GPA : 3.3/4.0</h6>
      </div>
      <div class="md-layout-item md-size-100">
        <h5 v-if="!isEnglish">Septembre 2013 - Août 2018</h5>
        <h5 v-else>September 2013 - August 2018</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormationDany",
  bodyClass: "formation-dany",

  components: {},

  data() {
    return {};
  },

  props: {
    isEnglish: {
      type: Boolean,
      default: false,
    },
    img_esisar: {
      type: String,
      default: require("@/assets/img/dany_cv/esisarlogo.png"),
    },
    img_polymtl: {
      type: String,
      default: require("@/assets/img/dany_cv/polylogo.png"),
    },
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.md-layout {
  margin-top: 30px;
}
</style>
