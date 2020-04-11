const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, './public')));
app.use('/', expressStaticGzip(path.join(__dirname), {
 enableBrotli: true
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/', '/index.html'))
});

app.listen(port ,() => {
    console.log (`app is running on port ${port}`);
});