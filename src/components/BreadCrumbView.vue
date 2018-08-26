<template lang="html">
  <div class="">
  <div class="bread-crumbs">
    <div class="crumb" v-for="crumb in crumbs" @click="selectFile(crumb.file)">
      <p class="crumb__label">
        {{ crumb.label }}
      </p>
      <i class="material-icons crumb__icon">keyboard_arrow_right</i>
    </div>
  </div>
</div>
</template>

<script>
import appState from './../stores/appState.js'

export default {
  data () {
    return {
      appState
    }
  },
  methods: {
    selectFile: function (file) {
      appState.setSelectedFile(file)
    }
  },
  computed: {
    crumbs: function () {
      let ret = []
      let temp = this.appState.currSelectedFile

      while (temp && temp.fileName) {
        ret.push({
          label: temp.fileName,
          file: temp
        })
        temp = temp.parent
      }

      return ret.reverse()
    }
  },
  created: function () {
    this.appState = appState
  }
}
</script>

<style lang="css" scoped>
.bread-crumbs {
}

.crumb {
  display: inline-flex;
  align-items: baseline;
}

.crumb__label {
  margin: auto 8px;
}
.crumb:last-child .crumb-icon {
  display: none;
}
</style>
