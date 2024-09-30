const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const pedidoRoutes = require('./routes/pedidoRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', pedidoRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(3003, () => {
        console.log('Pedido service running on port 3003');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
