const express = require('express');
const app = express();
const PORT = 3000;

// bikin rapi coy
app.set('json spaces', 2);
app.use(express.json());

namaBarang = [
    { id: 1, nama: "Komuter", harga: "2000000" },
    { id: 2, nama: "Mouse", harga: "100000" },
];

app.get('/', (req, res) => {
    res.send('testing \n');
});

app.get('/api/namabarang', (req, res) => {
    res.send(namaBarang);
});

app.delete('/api/delete/:id', (req, res) => {
    const idyangDicari = parseInt(req.params.id);
    const indexBarang = namaBarang.findIndex(p => p.id === idyangDicari);

    if (indexBarang === -1) {
        return res.status(404).json({
            pesan: "Barang tidak ada"
        });
    }

    const barangDihaupus = namaBarang.splice(indexBarang, 1);

    res.json({
        pesan: "Barang berhasil dihapus",
        dataDihapus: barangDihaupus[0],
        sisadata: namaBarang
    });

});

app.listen(PORT, () => {
    console.log(`Server di https://localhost:${PORT}`)
});