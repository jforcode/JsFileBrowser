<template lang="html">
  <div v-if="file">
    <button class="back-btn jb-btn jb-btn--icon" v-if="file && file.parent" @click="goBack">
      <i class="material-icons">arrow_back</i>
    </button>
    <div class="file-header">
      <p class="file-name">{{ file.fileName || '[ root ]' }}</p>
      <div class="jb-flex-spacer"></div>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="!file.isFile" @click="createFolder(file)">
        Create Folder
      </button>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="!file.isFile" @click="createFile(file)">
        Create File
      </button>
      <button class="jb-btn jb-btn--outline jb-mr-lt" v-if="file.parent" @click="renameFile(file)">
        Rename
      </button>
      <button class="jb-btn jb-btn--outline jb-btn--error jb-mr-lt" v-if="file.parent" @click="deleteFile(file)">
        Delete
      </button>
    </div>

    <FileChildrenGrid />
  </div>
</template>

<script>
import { fileOptionsMixin } from './../../mixins/FileOptionsMixin.js'
import app from './../../stores/app.js'
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
      if (this.file.parent) {
        this.selectFile(this.file.parent)
      }
    }
  },
  computed: {
    file: function () {
      return this.appState.currSelectedFile
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
