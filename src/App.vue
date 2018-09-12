<template lang="html">
  <div class="app">
    <AppBar class="app-top-bar" />
    <div class="main-holder">
      <AppSideBar class="side-bar" />
      <AppContent class="content-holder" />
    </div>
  </div>
</template>

<script>
import AppBar from './components/layouts/AppBar.vue'
import AppSideBar from './components/layouts/AppSideBar.vue'
import AppContent from './components/layouts/AppContent.vue'

export default {
  components: {
    AppBar,
    AppSideBar,
    AppContent
  }
}
</script>

<style lang="css" scoped>
.main-holder {
  display: flex;
  position: relative;
}

.side-bar {
  height: 100%;
  overflow: auto;
}

.content-holder {
  height: 100%;
  overflow: auto;
}
</style>
