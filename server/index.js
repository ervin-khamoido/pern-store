require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
   try {
      await sequelize.authenticate() // connect to db
      await sequelize.sync() // checks database states against data schema
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
   } catch (error) {
      console.log(error);
   }
}
start();