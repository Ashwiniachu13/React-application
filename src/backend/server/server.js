const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/api/signup', require('./routes/signup'));
app.use('/api/login', require('./routes/login'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});