<template>
    <div>
        <h2>Agregar Juego</h2>
        <form @submit.prevent="addGame">
            <div class="form-group">
                <label>Equipo Local</label>
                <input v-model="newGame.teamLocal" placeholder="Equipo Local" class="form-control" />
            </div>
            <div class="form-group">
                <label>Equipo Visitante</label>
                <input v-model="newGame.teamVisitor" placeholder="Equipo Visitante" class="form-control" />
            </div>
            <div class="form-group">
                <label>Fecha del juego</label>
                <input type="date" v-model="newGame.date" class="form-control" />
            </div>
            <div class="form-group">
                <label>Hora del juego</label>
                <input type="time" v-model="newGame.time" class="form-control" />
            </div>
            <div class="form-group">
                <label>Ubicación</label>
                <input v-model="newGame.location" placeholder="Ubicación" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Añadir Juego</button>
        </form>
    </div>
</template>

<script>
import apiService from '../services/apiService';

export default {
    data() {
        return {
            newGame: {
                teamLocal: '',
                teamVisitor: '',
                date: '',
                time: '',
                location: ''
            }
        };
    },
    methods: {
        addGame() {
            apiService.addGame(this.newGame)
                .then(() => {
                    this.$emit('gameAdded');
                    this.newGame = { teamLocal: '', teamVisitor: '', date: '', time: '', location: '' };
                })
                .catch(error => {
                    console.error("Error al añadir juego:", error);
                });
        }
    }
}
</script>