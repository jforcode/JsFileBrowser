<template lang="html">
  <div class="top-bar">
    <p class="action-ele" @click="$emit('showHome')">HOME</p>
    <div class="flex-spacer"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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

.action-ele {
  margin: 0 8px;
  padding: 8px;
  cursor: pointer;
}
</style>
