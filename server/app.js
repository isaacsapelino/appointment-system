const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const sequelize = require('./db/database');
const routes = require('./routes');

const port = 3000 || process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/user', routes.user);
app.use('/api/appointment', routes.appointment);

sequelize.sync().then(result => {
    console.log(`Database connected at port ${result.config.port}`);
    app.listen(port, () => {
        console.log(`App is now listening at port ${port}`);
    });
}).catch(err => {
    console.log(err);
});
