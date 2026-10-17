const express = require('express');
const app = express();
const PORT = 3000;

app.set('json spaces', 2);
app.use(express.json());

namaBarang = [
    { id: 1, nama: "Laptop", harga: 5000000 },
    { id: 2, nama: "Mouse", harga: 100000 }
]

app.put('/api/ubahbarang/:id', (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;

    const produk = namaBarang.find(p => p.id === parseInt(id));

    if (!produk) {
        return req.status(404).json({
            pesan: "Produk tidak ditemukan"
        });
    }

    if (nama) produk.nama = nama;
    if (harga) produk.harga = harga;

    res.json({
        pesan: "Produk berhasil di ganti",
        data: produk
    })
});

app.get('/api/lihatbarang', (req, res) => {
    res.json(namaBarang);
});


app.listen(PORT, () => {
    console.log(`Server jalan di https://localhost:${PORT}`);
});