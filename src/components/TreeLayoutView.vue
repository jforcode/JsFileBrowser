<template lang="html">
  <div>
    <FileView
      v-for="(f, index) in rootFile.files"
      :file="f"
      :indent="16"
      :key="index"
      :uid="index + ''" />

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

<style lang="css" scoped>
.option-holder {
  position: relative;
}
</style>
