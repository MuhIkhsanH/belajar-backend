const express = require('express');
const app = express();
const PORT = 3000;

app.set('json spaces', 2);
app.use(express.json());

namaBarang = [
    { id: 1, nama: "Panci", harga: 30000 },
    { id: 2, nama: "Wajan", harga: 40000 },
]

app.get('/api/lihatbarang', (req, res) => {
    res.json(namaBarang);
});


app.post('/api/tambah', (req, res) => {
    const { nama, harga } = req.body;

    const barangBaru = {
        id: namaBarang.length + 1,
        nama: nama,
        harga: harga
    };

    namaBarang.push(barangBaru);

    res.status(201).json({
        pesan: "Produk berhasil di tambahkan",
        produk: barangBaru
    })

});

app.listen(PORT, () => {
    console.log(`BUKAKEN NENG http://localhost:${PORT}`);
});