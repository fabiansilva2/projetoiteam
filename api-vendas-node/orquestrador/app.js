const express = require('express');
const cors = require('cors');
const orquestradorRoutes = require('./routes/orquestradorRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', orquestradorRoutes);

app.listen(3000, () => {
    console.log('Orquestrador running on port 3000');
});
