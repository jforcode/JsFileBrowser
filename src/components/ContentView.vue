<template lang="html">
  <div class="">
    <div class="file-header">
      <div>
        <p class="file-name">{{ appState.currSelectedFile.fileName }}</p>
        <p class="file-created-by">Created By: {{ appState.currSelectedFile.createdBy }}</p>
      </div>
      <div class="flex-spacer"></div>
      <p>{{ appState.currSelectedFile.lastUpdatedAt }}</p>
    </div>
    <div v-if="!appState.currSelectedFile.isFile" class="child-files">
      <div v-for="file in appState.currSelectedFile.files" class="child-file" @click="selectFile(file)">
        <i class="material-icons child-ele child__icon">{{ file.isFile ? 'file_upload' : 'folder' }}</i>
        <p class="child-ele child__name">{{ file.fileName }}</p>
        <p class="child-ele child__created-by">{{ file.createdBy }}</p>
        <p class="child-ele child__updated-at">{{ file.lastUpdatedAt }}</p>
      </div>
      <p v-if="!appState.currSelectedFile.files.length">Empty folder</p>
    </div>
  </div>
</template>

<script>
import appState from './../stores/appState.js'

export default {
  data () {
    return {
      appState
    }
  },
  methods: {
    selectFile: function (file) {
      appState.setSelectedFile(file)
    }
  },
  created () {
    this.appState = appState
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
