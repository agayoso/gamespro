<template>
    <div>
        <ul v-if="games && games.length">
            <li v-for="game in games" :key="game.id">
                {{ game.teamLocal }} vs {{ game.teamVisitor }} - {{ game.date }} a las {{ game.time }} en {{ game.location }}
                <button @click="deleteGame(game.id)">Eliminar</button>
            </li>
        </ul>
        <p v-else>No hay juegos registrados.</p>
    </div>
</template>
  <script>
  import apiService from '../services/apiService';

  export default {
    props: {
      games: Array
    },
    methods: {
      async deleteGame(id) {
        try {
          await apiService.deleteGame(id);
          this.$emit('gameDeleted');
        } catch (error) {
          console.error('Error deleting game:', error);
        }
      }
    }
  };
  </script>
