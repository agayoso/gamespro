<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Gestor de Juegos de Fútbol</a>
    </nav>

    <div class="container mt-4">
      <GamesView />
    </div>
  </div>
</template>

<script>
import GamesView from './views/GamesView.vue'

export default {
  components: {
    GamesView
  }
}
</script>
