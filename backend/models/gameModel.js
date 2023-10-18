const db = require('../database');

const Game = {
    getAll: async () => {
        const result = await db.query('SELECT * FROM games');
        return result.rows;
    },
    //CREAR JUEGO
    create: async (gameData) => {
        const result = await db.query('INSERT INTO games(teamLocal, teamVisitor, date, time, location) VALUES($1, $2, $3, $4, $5) RETURNING *',
            [gameData.teamLocal, gameData.teamVisitor, gameData.date, gameData.time, gameData.location]);
        return result.rows[0];
    },
    //ACTUALIZAR UN JUEGO
    update: async (id, gameData) => {
        const result = await db.query('UPDATE games SET teamLocal=$1, teamVisitor=$2, date=$3, time=$4, location=$5 WHERE id=$6 RETURNING *',
            [gameData.teamLocal, gameData.teamVisitor, gameData.date, gameData.time, gameData.location, id]);
        return result.rows[0];
    },
    //BORRAR UN JUEGO
    delete: async (id) => {
        const result = await db.query('DELETE FROM games WHERE id=$1 RETURNING *', [id]);
        return result.rows[0];
    },
    //DETALLES DE UN JUEGO ID
    getById: async (id) => {
        const result = await db.query('SELECT * FROM games WHERE id=$1', [id]);
        return result.rows[0];
    },


};

module.exports = Game;
