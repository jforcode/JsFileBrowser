<template lang="html">
  <div class="option-holder">
    <button :id="'options_' + compId" class="jb-btn jb-btn--icon" @click="showMenu">
      <i class="material-icons menu-btn">more_vert</i>
    </button>
    <div class="menu-holder" v-if="menuVisible" >
      <ul class="menu jb-shadow--2dp" :for="'options_' + compId">
        <li class="menu-item option--create" v-show="!file.isFile" @click="createFolder">Create Folder</li>
        <li class="menu-item option--create" v-show="!file.isFile" @click="createFile">Create New File</li>
        <li class="menu-item option--update" @click="renameFile">Rename</li>
        <li class="menu-item option--delete" @click="deleteFile">Delete</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { User } from './../../models'
import fs from './../../stores/fileSystem.js'

export default {
  props: [
    'compId',
    'file'
  ],
  data () {
    return {
      menuVisible: false,
    }
  },
  methods: {
    showMenu: function (evt) {
      let context = this
      let fnClose = function (event) {
        console.log('called')
        context.menuVisible = false
        window.removeEventListener('click', fnClose, true)
      }

      this.menuVisible = true
      window.addEventListener('click', fnClose, true)
    },
    createFolder: function () {
      if (this.file.isFile) return
      let fileName = prompt('New Folder Name', '')
      fs.methods.createFile(this.file, false, fileName, this.file.type, User.NORMAL_USER)
    },
    createFile: function () {
      if (this.file.isFile) return
      let fileName = prompt('New File Name', '')
      fs.methods.createFile(this.file, true, fileName, this.file.type, User.NORMAL_USER)
    },
    renameFile: function () {
      let fileName = prompt('New Name', '')
      fs.methods.renameFile(this.file, fileName, this.file.type, User.NORMAL_USER)
    },
    deleteFile: function () {
      fs.methods.deleteFile(file, User.NORMAL_USER)
    }
  }
}
</script>

<style lang="css">
.option-holder {
  position: relative;
}

.menu-btn {
  font-size: 20px;
}

.menu {
  position: absolute;
  top: 20px;
  right: 0;
  list-style-type: none;
  padding: 8px 0;
  width: 160px;
  background-color: var(--surface-color);
  z-index: 999;
}

.menu-item {
  width: auto;
  padding: 16px;
}
.menu-item:hover {
  background-color: var(--surface-shadow-color);
}

</style>
