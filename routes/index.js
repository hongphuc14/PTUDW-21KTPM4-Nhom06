const express = require('express');
const rootRoute = express.Router();
const basicRoute = require('./basicRoute');
const soRoute = require('./soRoute');
const quanRoute = require('./quanRoute');
const nguoidanRoute = require('./nguoidanRoute');
const authRoute = require('./authRoute');

rootRoute.use("/basic", basicRoute);
rootRoute.use("/so", soRoute);
rootRoute.use("/quan", quanRoute);
rootRoute.use("/nguoidan", nguoidanRoute);
rootRoute.use("/auth", authRoute);

module.exports = rootRoute;