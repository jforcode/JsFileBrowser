import Vue from 'vue'
import App from './App.vue'

import './common/theme.css'
import './common/util.css'
import './common/elements.css'

import { File, User, Error } from './models'
import app from './stores/app.js'
import fs from './stores/fileSystem.js'

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

const root = fs.state.root
const file1 = new File(true, 'File 1', 'txt', User.NORMAL_USER)
const file2 = new File(true, 'File 2', 'txt', User.NORMAL_USER)

const folder1 = new File(false, 'Folder 1', '', User.NORMAL_USER)
const file11 = new File(true, 'File 3', 'txt', User.NORMAL_USER)
const file12 = new File(true, 'File 2', 'txt', User.NORMAL_USER)

fs.methods.createFile(root, file1)
fs.methods.createFile(root, file2)
fs.methods.createFile(root, folder1)
fs.methods.createFile(folder1, file11)
fs.methods.createFile(folder1, file12)

app.methods.selectFile(root)
