import Vue from 'vue';
import App from './App.vue';
import fs from './stores/fileSystem.js'
import data from './data/longJson.json'

new Vue({
  el: '#app',
  template: '<App/>',
  created: function () {
    fs.init(data)
  },
  components: { App }
});