<template lang="html">
  <div id="app">
    <TopBarView />
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

<style lang="css">
body {

}

.main-holder {

}

.tree-view {

}

.content-view-holder {

}

.bread-crumbs-holder {

}

.content-holder {

}
</style>
