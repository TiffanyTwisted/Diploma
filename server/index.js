require('dotenv').config();
const express = require("express");
const sequelize = require("./db/config/config");
const models = require('./models/models');
const operation = require("./db/operation/operation");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path');
const PORT = process.env.PORT || 6010;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'static')));
app.use(fileUpload({}))
app.use('/api', router);


app.use(errorHandler); // Error handling: should be last task 

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    } catch (e) {
        console.log(e)
    }
};

start();

