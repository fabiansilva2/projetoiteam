const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const produtoRoutes = require('./routes/produtoRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', produtoRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(3004, () => {
        console.log('Produto service running on port 3004');
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
