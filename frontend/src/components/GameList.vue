<template>
    <div>
        <ul v-if="games && games.length">
            <li v-for="game in games" :key="game.id">
                <!-- Usando métodos para formatear fecha y hora -->
                {{ game.teamLocal }} vs {{ game.teamVisitor }} - {{ formatDate(game.date) }} a las {{ formatTime(game.time) }} en {{ game.location }}
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
      },
      // Métodos añadidos para formatear fecha y hora
      formatDate(dateString) {
            let date = new Date(dateString);
            let day = date.getDate().toString().padStart(2, '0');
            let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Meses comienzan desde 0
            let year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        formatTime(timeString) {
            return timeString.substring(0, 5); // Toma solo las horas y minutos de "HH:MM:SS"
        }
    }
};
</script>
