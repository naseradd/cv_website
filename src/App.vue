<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" :isEnglish="isEnglish" @changeLangage="changeLangage" />
      <div>
        <router-view :isEnglish="isEnglish"  />
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isEnglish: false,
      
    };
  },
  methods:{
    changeLangage(){
      this.isEnglish = !this.isEnglish;
    }
  },
}
</script>