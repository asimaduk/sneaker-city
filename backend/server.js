const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

//router to serve api calls
const productsRouter = require('./routes/products');
app.use('/api',productsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
