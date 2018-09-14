<template lang="html">
  <div class="jb-flex-row jb-flex-row--centered">
    <div class="crumb" v-for="crumb in crumbs" @click="selectFile(crumb.file)">
      <i class="material-icons crumb__icon">keyboard_arrow_right</i>
      <p class="crumb__label">
        {{ crumb.label || '[ root ]' }}
      </p>
    </div>
  </div>
</template>

<script>
import app from './../../stores/app.js'

export default {
  data () {
    return {
      appState: null
    }
  },
  methods: {
    selectFile: function (file) {
      app.methods.selectFile(file)
    },
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

.crumb:first-child .crumb__icon {
  display: none;
}

.crumb:first-child .crumb__label {
  margin-left: 0;
}

.crumb__label {
  margin: auto 8px;
  cursor: pointer;
}
.crumb__label:hover {
  color: var(--accent-color);
}

</style>
