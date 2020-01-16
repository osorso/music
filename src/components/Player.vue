<template>
  <div class="player-box">
    <div class="player">
      <audio src=""></audio>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
