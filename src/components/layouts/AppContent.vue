<template lang="html">
  <div v-if="appState.currSelectedFile" class="content">
    <BreadCrumb />
    <FileViewContent />
  </div>
  <div v-else>
    No File Selected
  </div>
</template>

<script>
import BreadCrumb from './../views/BreadCrumb.vue'
import FileViewContent from './../views/FileViewContent.vue'

import app from './../../stores/app.js'

export default {
  data () {
    return {
      appState: app.state
    }
  },
  components: {
    BreadCrumb,
    FileViewContent
  }
}
</script>

<style lang="css" scoped>
.content {
  padding: 16px;
}
</style>
