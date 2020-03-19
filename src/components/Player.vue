<template>
  <div class="player-box">
    <div class="name">各区域</div>
    <div class="control"></div>
    <div class="player">
      <audio src="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    musicInfo: {
      type: Object,
      required: true,
      default() {
        return {
          src: ''
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
