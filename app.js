const express = require('express');
const path = require('path');
const compression = require('compression')
const app = express();
const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, './public')));
app.use(compression())
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/', '/index.html'))
});

app.listen(port ,() => {
    console.log (`app is running on port ${port}`);
});