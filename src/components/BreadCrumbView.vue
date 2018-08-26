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
