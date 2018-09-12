import Vue from 'vue'
import App from './App.vue'
import common from './common.css'
import fs from './stores/fileSystem.js'
import data from './data/longJson.json'

require('typeface-montserrat')

new Vue({
  el: '#app',
  template: '<App/>',
  created: function () {
    fs.init(data)
  },
  components: { App }
});
