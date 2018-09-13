<template lang="html">
  <div class="option-holder">
    <button :id="'options_' + uid" class="mdl-button mdl-js-button mdl-button--icon">
      <i class="material-icons">more_vert</i>
    </button>
    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" :for="'options_' + uid">
      <li class="mdl-menu__item option--create" v-show="!file.isFile" @click="createFolder">Create Folder</li>
      <li class="mdl-menu__item option--create" v-show="!file.isFile" @click="createFile">Create New File</li>
      <li class="mdl-menu__item option--update" @click="renameFile">Rename</li>
      <li class="mdl-menu__item option--delete" @click="deleteFile">Delete</li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
