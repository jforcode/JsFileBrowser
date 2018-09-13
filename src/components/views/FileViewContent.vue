<template lang="html">
  <div v-if="appState.currSelectedFile">
    <p class="file-name" v-if="!appState.currSelectedFile.parent">
      /
    </p>
    <div class="file-header">
      <div>
        <p class="file-name">{{ appState.currSelectedFile.fileName }}</p>
        <p class="file-created-by">Created By: {{ appState.currSelectedFile.createdBy }}</p>
      </div>
      <div class="flex-spacer"></div>
      <p>{{ appState.currSelectedFile.lastUpdatedAt.fromNow() }}</p>
    </div>
    <div class="file-options">
      <button class="mdl-button mdl-js-button mdl-button--icon" v-if="appState.currSelectedFile.parent" @click="goBack">
        <i class="material-icons">arrow_back</i>
      </button>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-if="!appState.currSelectedFile.isFile" @click="createFolder">
        Create Folder
      </button>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-if="!appState.currSelectedFile.isFile" @click="createFile">
        Create File
      </button>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-if="appState.currSelectedFile.parent" @click="renameFile">
        Rename
      </button>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-if="appState.currSelectedFile.parent" @click="deleteFile">
        Delete
      </button>
    </div>
    <div v-if="!appState.currSelectedFile.isFile" class="child-files">
      <div v-for="file in appState.currSelectedFile.files" class="child-file" @click="selectFile(file)">
        <i class="material-icons child-ele child__icon">{{ file.isFile ? 'file_upload' : 'folder' }}</i>
        <p class="child-ele child__name">{{ file.fileName }}</p>
        <p class="child-ele child__created-by">{{ file.createdBy }}</p>
        <p class="child-ele child__updated-at">{{ file.lastUpdatedAt.fromNow() }}</p>
      </div>
      <p v-if="!appState.currSelectedFile.files.length">Empty folder</p>
    </div>
  </div>
</template>

<script>
import { User } from './../../models'
import app from './../../stores/app.js'
import fs from './../../stores/fileSystem.js'

export default {
  data () {
    return {
      appState: null
    }
  },
  methods: {
    selectFile: function (file) {
      app.methods.selectFile(file)
    },
    goBack: function () {
      this.selectFile(this.appState.currSelectedFile.parent)
    },
    createFolder: function () {
      var file = this.appState.currSelectedFile
      if (file.isFile) return
      let fileName = prompt('New Folder Name', '')
      fs.createFile(file, false, fileName, file.type, users.user)
    },
    createFile: function () {
      var file = this.appState.currSelectedFile
      if (file.isFile) return
      let fileName = prompt('New File Name', '')
      fs.createFile(file, true, fileName, file.type, users.user)
    },
    renameFile: function () {
      var file = this.appState.currSelectedFile
      let fileName = prompt('New Name', '')
      fs.renameFile(file, fileName, file.type, users.user)
    },
    deleteFile: function () {
      var file = this.appState.currSelectedFile
      fs.deleteFile(file, users.user)
      this.selectFile(file.parent)
    }
  },
  created () {
    this.appState = app.state
  }
}
</script>

<style lang="css" scoped>
.file-header {
  display: flex;
  align-items: baseline;
}

.file-name {
  font-size: 1.3em;
  color: #FF5722;
}

.file-created-by {
  font-size: 0.8em;
}

.file-options button {
  margin-right: 8px;
}

.child-files {
  margin-top: 32px;
}

.child-file {
  display: flex;
  align-items: center;
  padding: 16px 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: all .3s;
}
.child-file:hover {
  background-color: #EEEEEE;
}

.child-ele {
  margin: 0;
}

.child__icon {
  flex: 0.5 0;
}
.child__name {
  flex: 4 0;
}
.child__created-by {
  flex: 1 0;
}
.child__updated-at {
  flex: 2 0;
}
</style>
