<template>
  <div class="home">
    <Game :gridSize="10"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Game from '../components/Game.vue'

export default {
  name: 'Home',
  components: {
    Game
  }
}
</script>
