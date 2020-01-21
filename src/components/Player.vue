<template>
  <div class="player-box">
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
