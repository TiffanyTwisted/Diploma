require('dotenv').config();
const express = require("express");
const sequelize = require("./db/config/config");
const user = require('./models/user');
const operation = require("./db/operation/operation");
const cors = require("cors");

const PORT = process.env.PORT || 6009;

const app = express();
app.use(cors());
app.use(express.json());

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
/*
operation.getUsers().then(res => {
    console.log(res);
})
*/
