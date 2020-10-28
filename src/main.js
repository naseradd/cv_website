import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Formation from './Formation.vue'
import Projects from './Projects.vue'
import Asso from './Asso.vue'
import Skills from './Skills.vue'


Vue.use(ElementUI)


var formation = new Vue({
  el: '#formation',
  render: h => h(Formation),
})

var projects = new Vue({
  el: '#projects',
  render: h => h(Projects),
})

var skills = new Vue({
  el: '#skills',
  render: h => h(Skills),
})

var asso = new Vue({
  el: '#asso',
  render: h => h(Asso),
})

var vm = new Vue({
  el: '#app',
  render: h => h(App),
})

  
