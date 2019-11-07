// require('dotenv').config();

// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_URL);

const port = 3000;

const app = require('./app');

app.listen(port, () => console.log('server is running at', port));