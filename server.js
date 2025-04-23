const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile( path.join( __dirname, 'src', 'html', 'home.html' ) );
});

app.listen(PORT, () => {
    console.log(`App running at \t localhost:${PORT}`);
});