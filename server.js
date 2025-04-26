const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const app = express();
const PORT = 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/:page', (req, res) => {
    const { page } = req.params;
    res.sendFile( path.join( __dirname, 'src', 'html', `${page}.html` ) );
});

app.get('/', (req, res) => {
    res.sendFile( path.join( __dirname, 'src', 'html', 'overview.html' ) );
});

app.listen(PORT, () => {
    console.log(`App running at \t localhost:${PORT}`);
});