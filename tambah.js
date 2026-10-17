const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/tambah/:id1/:id2', (req, res) => {
    const { id1, id2 } = req.params;
    const hasil = parseInt(id1) + parseInt(id2)

    res.json({
        hasil: hasil
    })
});

app.listen(PORT, () => {
    console.log(`App Berjalan pada http://localhost:${PORT}`)
});