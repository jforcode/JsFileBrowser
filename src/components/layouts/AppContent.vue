<template lang="html">
  <div class="content">
    <BreadCrumb />
    <FileViewContent />
  </div>
</template>

<script>
import BreadCrumb from './../views/BreadCrumb.vue'
import FileViewContent from './../views/FileViewContent.vue'

export default {
  data () {
    return {

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
