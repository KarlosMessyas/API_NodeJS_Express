const express = require('express');
const api = express();
api.use(express.json());

const router = require('./router');
api.use(router);

module.exports = api;