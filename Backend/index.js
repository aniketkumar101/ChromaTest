// const express = require('express');
// const cors = require('cors');
// const User = require('./route/Users');
// const dbconnect = require('./db/db');

// dbconnect();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// app.use('/users', User);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const cors = require('cors');
const path = require('path');

const User = require('./route/Users');
const dbconnect = require('./db/db');

dbconnect();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// ✅ Serve static frontend files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', User);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


