

<template>
  <div id="app">
    <div id="header_page">
      <section class="el-container is-vertical">
      
        <header class="el-header" >
          <h1 @click="startHacking">{{titre}}</h1>
        </header>
      </section>
      
    </div>  

    <div id="content">
      <img src="./assets/logo.png">
      <div>
        <el-button @click="startHacking">On va pouvoir travailler</el-button>
      </div>
    </div>  
  </div>
</template>


<script>
export default {
   data() {
            return {
                titre:'Ceci est un titre !'
            }
        },
  methods: {
    startHacking () {
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
</style>
