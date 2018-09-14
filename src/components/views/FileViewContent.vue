<template lang="html">
  <div v-if="appState.currSelectedFile">
    <button class="back-btn jb-btn jb-btn--icon" v-if="appState.currSelectedFile && appState.currSelectedFile.parent" @click="goBack">
      <i class="material-icons">arrow_back</i>
    </button>
    <div class="file-header">
      <p class="file-name">{{ appState.currSelectedFile.fileName || '[ root ]' }}</p>
      <div class="jb-flex-spacer"></div>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="!appState.currSelectedFile.isFile" @click="createFolder">
        Create Folder
      </button>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="!appState.currSelectedFile.isFile" @click="createFile">
        Create File
      </button>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="appState.currSelectedFile.parent" @click="renameFile">
        Rename
      </button>
      <button class="jb-btn jb-btn--outline jb-btn--error jb-mr-lt" v-if="appState.currSelectedFile.parent" @click="deleteFile">
        Delete
      </button>
    </div>

    <FileChildrenGrid />
  </div>
</template>

<script>
import { User } from './../../models'
import app from './../../stores/app.js'
import fs from './../../stores/fileSystem.js'
import FileChildrenGrid from './FileChildrenGrid.vue'

export default {
  data () {
    return {
      appState: app.state
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
  components: {
    FileChildrenGrid
  }
}
</script>

<style lang="css" scoped>
.back-btn {
  margin-left: -8px;
  margin-top: 32px;
}

.file-header {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.file-name {
  font-size: 1.4em;
  color: var(--hero-color);
}

.file-created-by {
  font-size: 0.8em;
}

.file-options {
  display: flex;
  margin-top: 16px;
}

.file-options button {
  margin-right: 8px;
}

</style>
