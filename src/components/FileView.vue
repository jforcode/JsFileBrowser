<template lang="html">
  <div class="">
    <i class="material-icons">folder</i>
    <span>{{ file.fileName }}</span>
    <file-view
      :file="file.files[0]"
      :key="0" />
  </div>
</template>

<script>
export default {
  name: 'file-view',
  props: [
    'file'
  ],
  created () {
    console.log(this.file)
  }
}
</script>

<style lang="css">
</style>
