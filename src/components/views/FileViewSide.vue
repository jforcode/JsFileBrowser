<template lang="html">
  <div v-bind:style="{ paddingLeft: indent + 'px' }">
    <div class="tree-element">
      <div class="file-holder" v-if="file.isFile" @click="setAsSelected">
        <i class="material-icons file__if-file-icon">insert_drive_file</i>
        <span class="file__name">{{ file.fileName }}</span>
      </div>
      <div class="file-holder" v-else>
        <i class="material-icons file__toggle-icon" @click="toggleDisplayChildren">
          {{ displayChildren ? 'arrow_drop_down' : 'arrow_right' }}
        </i>
        <i class="material-icons file__if-folder-icon" @click="setAsSelected">folder</i>
        <span class="file__name" @click="setAsSelected">{{ file.fileName }}</span>
      </div>

      <div class="jb-flex-spacer"></div>

      <FileOptionsMenu
        :comp-id="compId"
        :file="file" />
    </div>
    <div class="file__children" v-if="displayChildren && sortedFiles.length">
      <file-view
        v-for="(f, index) in sortedFiles"
        :file="f"
        :indent="16"
        :key="index"
        :comp-id="compId + '_' + index" />
    </div>
  </div>
</template>

<script>
import app from './../../stores/app.js'
import fs from './../../stores/fileSystem.js'
import FileOptionsMenu from './FileOptionsMenu.vue'

export default {
  name: 'file-view',
  props: [
    'compId',
    'file',
    'indent',
    'childrenVisible'
  ],
  data () {
    return {
      displayChildren: false
    }
  },
  methods: {
    setAsSelected: function () {
      app.methods.selectFile(this.file)
    },
    toggleDisplayChildren: function () {
      this.displayChildren = !this.displayChildren
    }
  },
  computed: {
    sortedFiles () {
      return this.file.files.sort((a, b) => a.isFile - b.isFile)
    }
  },
  created () {
    this.displayChildren = this.childrenVisible
  },
  components: {
    FileOptionsMenu
  }
}

</script>

<style lang="css" scoped>
.tree-element {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.file-holder {
  display: flex;
  align-items: center;
  padding: 6px 0;
}

.file-holder .material-icons {
  font-size: 20px;
  margin-bottom: 2px;
}

.file__if-file-icon {
  margin-left: 20px;
}

.file__toggle-icon {
}

.file__if-folder-icon {
}

.file__name {
  flex-grow: 1;
  font-size: 14px;
  margin-left: 8px;
}

.file__children {
  margin-left: 8px;
}
</style>
