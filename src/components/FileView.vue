<template lang="html">
  <div class="">
    <div class="tree-element"
      v-if="file.fileName">
      <i class="material-icons tree-element__icon">folder</i>
      <span class="tree-element__name">{{ file.fileName }}</span>
    </div>
    <file-view
      v-if="file.files.length"
      v-for="(f, index) in file.files"
      v-bind:style="{ paddingLeft: indent + 'px' }"
      :file="f"
      :indent="16"
      :key="index" />
  </div>
</template>

<script>
export default {
  name: 'file-view',
  props: [
    'file',
    'indent'
  ],
  created () {
    console.log(this.file.files.length);
    console.log(this.file.fileName);
  }
}
</script>

<style lang="css">
.tree-element {
  padding: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.tree-element__icon {

}

.tree-element__name {
  margin-left: 16px;
}
</style>
