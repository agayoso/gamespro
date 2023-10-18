<template>
    <div>
      <h1 class="mb-4">Listado de Juegos</h1>
      <!-- Barra de búsqueda -->
      <div class="mb-4">
        <input v-model="searchTerm" @input="filterGames" placeholder="Buscar por nombre o ubicación..." class="form-control" />
      </div>

      <div class="mb-4">
        <AddGameForm @gameAdded="loadGames" />
      </div>

      <GameList :games="filteredGames" />
    </div>
  </template>

  <script>
  import AddGameForm from '../components/AddGameForm.vue';
  import GameList from '../components/GameList.vue';
  import apiService from '../services/apiService';

  export default {
    components: {
    AddGameForm,
    GameList
  },
  data() {
    return {
      games: [],
      searchTerm: '',
      filteredGames: []
    };
  },
    methods: {
      async loadGames() {
        try {
          this.games = await apiService.getAllGames();
          this.filteredGames = this.games;
        } catch (error) {
          console.error('Error loading games:', error);
        }
      },
      filterGames() {
        if (this.searchTerm) {
            this.filteredGames = this.games.filter(game =>
                game.teamLocal.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                game.teamVisitor.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                (game.location && game.location.toLowerCase().includes(this.searchTerm.toLowerCase()))
            );
        } else {
            this.filteredGames = this.games;
        }
      }
    },
    created() {
        this.loadGames();
    }
  };
  </script>
