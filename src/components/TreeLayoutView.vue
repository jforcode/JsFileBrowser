<template lang="html">
  <div>
    <FileView
      :file="rootFile"
      :indent="0"
      :key="0" />

  </div>
</template>

<script>
import FileView from './FileView.vue'
import fs from './../stores/fileSystem.js'

export default {
  name: 'tree-layout',
  data () {
    return {
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
