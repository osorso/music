<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <player msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Player from '@/components/Player.vue'

export default {
  name: 'home',
  components: {
    Player
  }
}
</script>
