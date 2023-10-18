const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

const gamesRoutes = require('./routes/games');
app.use('/api/games', gamesRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
