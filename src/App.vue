<template lang="html">
  <div id="app">
    <TopBarView class="top-bar"/>
    <div class="main-holder">
      <TreeLayoutView class="tree-view-holder" />
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
  </div>
</template>

<script>
import TopBarView from './components/TopBarView.vue'
import TreeLayoutView from './components/TreeLayoutView.vue'
import BreadCrumbView from './components/BreadCrumbView.vue'
import ContentView from './components/ContentView.vue'

import appState from './stores/appState.js'

export default {
  data () {
    return {
      appState
    }
  },
  created () {
    this.appState = appState
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
* {
	font-family: 'Montserrat', sans-serif;
}

body {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
  position: static;
}

.top-bar {

}

.main-holder {
  display: flex;
  height: 100%;
}

.tree-view-holder {
  flex: 2 0;
  overflow: scroll;
  height: 100%;
}

.no-file-selected {
  margin: 20% 30%;
}

.content-view-holder {
  flex: 5 0;
}

.bread-crumbs-holder {
  padding: 16px;
}

.content-holder {
  padding: 16px;
}
</style>
