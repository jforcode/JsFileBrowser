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
.app {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.main-holder {
  display: flex;
  align-items: stretch;
  height: 100%;
}

.side-bar {
  flex: 1 0;
  overflow: auto;
  padding-bottom: 80px;
}

.content-holder {
  flex: 3 0;
  overflow: auto;
  padding-bottom: 80px;
}
</style>
