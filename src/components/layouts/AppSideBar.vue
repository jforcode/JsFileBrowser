<template lang="html">
  <div class="jb-pd--sm">
    <FileViewSide
      :comp-id="'root_file'"
      :file="rootFile"
      :indent="0"
      :children-visible="true" />
  </div>
</template>

<script>
import FileViewSide from './../views/FileViewSide.vue'

import fs from './../../stores/fileSystem.js'
import app from './../../stores/app.js'

export default {
  data () {
    return {
      rootFile: fs.state.root
    }
  },
  components: {
    FileViewSide
  }
}
</script>

<style lang="css">
</style>
