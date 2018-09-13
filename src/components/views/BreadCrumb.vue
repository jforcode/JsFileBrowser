<template lang="html">
  <div class="">
    <div class="crumb" v-for="crumb in crumbs" @click="selectFile(crumb.file)">
      <i class="material-icons crumb__icon">keyboard_arrow_right</i>
      <p class="crumb__label">
        {{ crumb.label }}
      </p>
    </div>
  </div>
</template>

<script>
import app from './../../stores/app.js'
import fs from './../../stores/fileSystem.js'

export default {
  data () {
    return {
      appState: null
    }
  },
  methods: {
    selectFile: function (file) {
      app.methods.selectFile(file)
    }
  },
  computed: {
    crumbs () {
      return this.appState.currSelectedFile ? this.appState.currSelectedFile.getPath() : []
    }
  },
  created () {
    this.appState = app.state
  }
}
</script>

<style lang="css" scoped>
.crumb {
  display: inline-flex;
  align-items: baseline;
}

.crumb__label {
  margin: auto 8px;
  cursor: pointer;
  transition: all .2s;
}
.crumb__label:hover {
  color: #FF5722;
}

</style>
