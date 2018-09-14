<template lang="html">
  <div v-if="appState.currSelectedFile">
    <button class="back-btn jb-btn jb-btn--icon" v-if="appState.currSelectedFile && appState.currSelectedFile.parent" @click="goBack">
      <i class="material-icons">arrow_back</i>
    </button>
    <div class="file-header">
      <p class="file-name">{{ appState.currSelectedFile.fileName || '[ root ]' }}</p>
      <div class="jb-flex-spacer"></div>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="!appState.currSelectedFile.isFile" @click="createFolder(appState.currSelectedFile)">
        Create Folder
      </button>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="!appState.currSelectedFile.isFile" @click="createFile(appState.currSelectedFile)">
        Create File
      </button>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="appState.currSelectedFile.parent" @click="renameFile(appState.currSelectedFile)">
        Rename
      </button>
      <button class="jb-btn jb-btn--outline jb-btn--error jb-mr-lt" v-if="appState.currSelectedFile.parent" @click="deleteFile(appState.currSelectedFile)">
        Delete
      </button>
    </div>

    <FileChildrenGrid />
  </div>
</template>

<script>
import { fileOptionsMixin } from './../../mixins/FileOptionsMixin.js'
import { User } from './../../models'
import app from './../../stores/app.js'
import fs from './../../stores/fileSystem.js'
import FileChildrenGrid from './FileChildrenGrid.vue'

export default {
  mixins: [fileOptionsMixin],
  data () {
    return {
      appState: app.state,
    }
  },
  methods: {
    selectFile: function (file) {
      app.methods.selectFile(file)
    },
    goBack: function () {
      if (this.appState.currSelectedFile.parent) {
        this.selectFile(this.appState.currSelectedFile.parent)
      }
    }
  },
  components: {
    FileChildrenGrid
  },
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
