const mongoose = require('mongoose');

const DB_URL = ("mongodb://mongo:L20Zm8Gh4NPd0TkCd2hv@containers-us-west-117.railway.app:8064");

const db = mongoose.connect(DB_URL);

module.exports = db;