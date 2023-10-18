/* eslint-disable no-useless-catch */
//esto permite utilizar los bloques try-catch
//para validaciones y manejo de errores
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';
//Configuramos el servicio para la api
export default {
  async getAllGames() {
    try {
      const response = await axios.get(`${BASE_URL}/games`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getGame(id) {
    try {
      const response = await axios.get(`${BASE_URL}/games/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async addGame(game) {
    try {
      const response = await axios.post(`${BASE_URL}/games`, game);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async updateGame(id, game) {
    try {
      const response = await axios.put(`${BASE_URL}/games/${id}`, game);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteGame(id) {
    try {
      const response = await axios.delete(`${BASE_URL}/games/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

