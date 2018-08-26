<template lang="html">
  <div class="">
    <div class="tree-element" v-if="file.fileName">
      <div class="" v-if="file.isFile">
        <!-- TODO: change to a file icon -->
        <i class="material-icons tree-element__icon" v-if="file.isFile">
          event
        </i>
      </div>
      <div class="" v-else>
        <i class="material-icons tree-element__icon" v-if="displayChildren" @click="displayChildren = false">
          arrow_drop_down
        </i>
        <i class="material-icons tree-element__icon" v-else @click="displayChildren = true">
          arrow_right
        </i>
        <i class="material-icons tree-element__icon" v-else>
          folder
        </i>
      </div>
      <span class="tree-element__name">{{ file.fileName }}</span>
    </div>
    <file-view v-if="displayChildren && file.files.length" v-for="(f, index) in file.files" v-bind:style="{ paddingLeft: indent + 'px' }" :file="f" :indent="16" :key="index" />
  </div>
</template>

<script>
export default {
  name: 'file-view',
  props: [
    'file',
    'indent'
  ],
  data () {
    return {
      displayChildren: false
    }
  },
  created () {
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
