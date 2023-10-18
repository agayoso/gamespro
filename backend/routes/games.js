const express = require('express');
const router = express.Router();
const gamesController = require('../controllers/gamesController');

router.get('/', gamesController.getAllGames);
router.post('/', gamesController.createGame);
router.put('/:id', gamesController.updateGame);
router.delete('/:id', gamesController.deleteGame);
router.get('/:id', gamesController.getGameById);


module.exports = router;
