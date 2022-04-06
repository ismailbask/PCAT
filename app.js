const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'))
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda başlatıldı`);
})