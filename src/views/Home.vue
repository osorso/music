<template>
  <div class="home">
    <player :musicInfo="musicInfo"/>
    <router-link to="/about">About</router-link> |
    <router-link to="/404">404</router-link>
  </div>
</template>

<script>
import Player from '@/components/Player'
export default {
  name: 'Home',
  components: {
    Player
  },
  data() {
    return {
      musicInfo: {}
    }
  }
}
</script>
