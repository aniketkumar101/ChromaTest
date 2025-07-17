const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const user = require('./route/users.route');
const colorgaptest = require('./route/colorgaptest.route');
const numbertest = require('./route/numbertest.route');


const dbconnect = require('./db/db');

dbconnect();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve static frontend files from the "public" folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/users', user);
app.use('/api/colorgaptest', colorgaptest); 
app.use('/api/numbertest', numbertest);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



