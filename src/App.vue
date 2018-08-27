<template lang="html">
  <div id="app">
    <TopBarView class="top-bar" @showHome="currPage = pages.home" @showTrash="currPage = pages.trash" />
    <div class="main-holder" v-if="currPage === pages.home">
      <TreeLayoutView class="tree-view-holder shadow--2dp" />
      <div class="content-view-holder">
        <div v-if="appState.currSelectedFile">
          <BreadCrumbView class="bread-crumbs-holder" />
          <ContentView class="content-holder" />
        </div>
        <div class="no-file-selected" v-else>
          Please select a file to view it's contents
        </div>
      </div>
    </div>
    <div class="trash-holder" v-if="currPage === pages.trash">

    </div>
  </div>
</template>

<script>
import TopBarView from './components/TopBarView.vue'
import TreeLayoutView from './components/TreeLayoutView.vue'
import BreadCrumbView from './components/BreadCrumbView.vue'
import ContentView from './components/ContentView.vue'

import appState from './stores/appState.js'
import { pages } from './consts.js'

export default {
  data () {
    return {
      appState,
      pages,

      currPage: null
    }
  },
  methods: {
  },
  created () {
    this.appState = appState
    this.pages = pages
    this.currPage = pages.home
  },
  components: {
    TopBarView,
    TreeLayoutView,
    BreadCrumbView,
    ContentView
  }
}
</script>

<style lang="css" scoped>
.top-bar {
  height: 64px;
  background-color: #212121;
}

.main-holder {
  display: flex;
}

.trash-holder {

}

.tree-view-holder {
  flex: 2 0;
  background-color: #FAFAFA;
}

.content-view-holder {
  flex: 5 0;
  padding-left: 16px;
}

.no-file-selected {
  margin: 20% 30%;
}

.bread-crumbs-holder {
  padding: 16px;
}

.content-holder {
  padding: 16px;
}
</style>
