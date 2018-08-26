<template lang="html">
  <div>
    {{ message }}
    <FileView
      v-for="(file, index) in rootFile.files"
      :file="file"
      :key="index" />

  </div>
</template>

<script>
import FileView from './FileView.vue'
import fs from './../stores/fileSystem.js'

export default {
  name: 'tree-layout',
  data () {
    return {
      message: 'Tree view',
      rootFile: null
    }
  },
  created () {
    this.rootFile = fs.fsRoot
  },
  components: {
    FileView
  }
}
</script>

<style lang="css">
</style>
