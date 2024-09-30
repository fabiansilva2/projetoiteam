const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Auth service listening on port 3001');
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});
