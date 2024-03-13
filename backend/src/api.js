const express = require('express');
const cors = requiere('cors');
const api = express();
api.use(express.json());

const router = require('./router');
api.use(cors());
api.use(router);

module.exports = api;