<template lang="html">
  <div class="">
    <div class="tree-element">
      <div class="" v-if="file.isFile" @click="setAsSelected">
        <i class="material-icons tree-element__icon" v-if="file.isFile">insert_drive_file</i>
      </div>
      <div class="" v-else>
        <i class="material-icons tree-element__icon" @click="toggleDisplayChildren">
          {{ displayChildren ? 'arrow_drop_down' : 'arrow_right' }}
        </i>
        <i class="material-icons tree-element__icon" @click="setAsSelected">folder</i>
      </div>
      <span class="tree-element__name" @click="setAsSelected">{{ file.fileName }}</span>

      <div class="option-holder">
        <button :id="'options_' + uid" class="mdl-button mdl-js-button mdl-button--icon">
          <i class="material-icons">more_vert</i>
        </button>
        <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" :for="'options_' + uid">
          <li class="mdl-menu__item option--create" v-if="!file.isFile" @click="createFolder">Create Folder</li>
          <li class="mdl-menu__item option--create" v-if="!file.isFile" @click="createFile">Create New File</li>
          <li class="mdl-menu__item option--update" @click="renameFile">Rename</li>
          <li class="mdl-menu__item option--delete" @click="deleteFile">Delete</li>
        </ul>
      </div>
    </div>
    <div v-if="displayChildren && file.files.length" v-for="(f, index) in file.files">
      <file-view v-bind:style="{ paddingLeft: indent + 'px' }" :file="f" :indent="16" :key="index" :uid="uid + '_' + index" />
    </div>
  </div>
</template>

<script>
import appState from './../stores/appState.js'
import fs from './../stores/fileSystem.js'
import { users } from './../consts.js'

export default {
  name: 'file-view',
  props: [
    'file',
    'indent',
    'uid'
  ],
  data () {
    return {
      displayChildren: false
    }
  },
  methods: {
    setAsSelected: function () {
      appState.setSelectedFile(this.file)
    },
    toggleDisplayChildren: function () {
      this.displayChildren = !this.displayChildren
    },
    createFolder: function () {
      if (this.file.isFile) return
      let fileName = prompt('New Folder Name', '')
      fs.createFile(this.file, false, fileName, this.file.type, users.user)
    },
    createFile: function () {
      if (this.file.isFile) return
      let fileName = prompt('New File Name', '')
      fs.createFile(this.file, true, fileName, this.file.type, users.user)
    },
    renameFile: function () {
      let fileName = prompt('New Name', '')
      fs.renameFile(this.file, fileName, this.file.type, users.user)
    },
    deleteFile: function () {
      fs.deleteFile(file, users.user)
    }
  },
  created () {
  }
}
</script>

<style lang="css" scoped>
.option-holder {
  position: relative;
}

.option--create {
}

.option--update {
}

.option--delete {
  color: #F44336;
}

.tree-element {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.tree-element__icon {

}

.tree-element__name {
  margin-left: 16px;
}
</style>
