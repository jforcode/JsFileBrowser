<template lang="html">
  <div id="app">
    <TopBarView class="top-bar"/>
    <div class="main-holder">
      <TreeLayoutView class="tree-view-holder" />
      <div class="content-view-holder">
        <BreadCrumbView class="bread-crumbs-holder" />
        <ContentView class="content-holder" />
      </div>
    </div>
  </div>
</template>

<script>
import TopBarView from './components/TopBarView.vue'
import TreeLayoutView from './components/TreeLayoutView.vue'
import BreadCrumbView from './components/BreadCrumbView.vue'
import ContentView from './components/ContentView.vue'

export default {
  data () {
    return {
    }
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
  flex: 1 0;
  overflow: scroll;
  height: 100%;
}

.content-view-holder {
  flex: 2 0;
  padding: 16px;
}

.bread-crumbs-holder {
}

.content-holder {

}
</style>
