const Game = require('../models/gameModel');

const getAllGames = async (req, res) => {
    try {
        const games = await Game.getAll();
        res.json(games);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving games' });
    }
};

//CREAR JUEGO
const createGame = async (req, res) => {
    try {
        const newGame = await Game.create(req.body);
        res.json(newGame);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Error adding game" });
    }
};

//ACTUALIZAR UN JUEGO
const updateGame = async (req, res) => {
    try {
        const updatedGame = await Game.update(req.params.id, req.body);
        res.json(updatedGame);
    } catch (error) {
        res.status(500).json({ message: 'Error updating game', error: error.message });
    }
};

//BORRAR UN JUEGO
const deleteGame = async (req, res) => {
    try {
        const deletedGame = await Game.delete(req.params.id);
        res.json(deletedGame);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting game', error: error.message });
    }
};
//DETALLES POR ID
const getGameById = async (req, res) => {
    try {
        const game = await Game.getById(req.params.id);
        res.json(game);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving game', error: error.message });
    }
};

module.exports = {
    getAllGames,
    createGame,
    updateGame,
    deleteGame,
    getGameById
};

