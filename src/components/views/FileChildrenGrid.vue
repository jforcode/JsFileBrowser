<template lang="html">
  <div v-if="!file.isFile" class="child-files">
    <div v-for="file in sortedFiles" class="child-file" @click="selectFile(file)">
      <i class="material-icons child-ele child__icon">{{ file.isFile ? 'file_upload' : 'folder' }}</i>
      <p class="child-ele child__name">{{ file.fileName }}</p>
      <p class="child-ele child__created-by">{{ file.createdBy.name }}</p>
      <p class="child-ele child__updated-at">{{ file.lastUpdatedAt.fromNow() }}</p>
    </div>
    <p v-if="!file.files.length">Empty folder</p>
  </div>
</template>

<script>
import app from './../../stores/app.js'

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
  },
  computed: {
    file () {
      return this.appState.currSelectedFile
    },
    sortedFiles () {
      return this.file.files.slice().sort((a, b) => a.isFile - b.isFile)
    }
  },
}
</script>

<style lang="css">

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
