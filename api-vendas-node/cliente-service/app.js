const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const clienteRoutes = require('./routes/clienteRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', clienteRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('Cliente service running on port 3002');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
