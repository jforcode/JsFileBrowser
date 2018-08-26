<template lang="html">
  <div class="top-bar">
    <span>HOME</span>
    <div class="flex-spacer"></div>
    <span>TRASH</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Top Bar'
    }
  }
}
</script>

<style lang="css" scoped>
.top-bar {
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding-left: 32px;
  padding-right: 16px;
}
</style>
