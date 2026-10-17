const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// endpoint awal
app.get('/', (req, res) => {
    res.send("halo ini server js")
});


// endpoint username
app.get('/user/:username', (req, res) => {
    const { username } = req.params;
    res.send(`Selamat datang: ${username}`)
});

// endpint api produk tapi ditampilkan semua
app.get('/api/produk', (req, res) => {
    const daftarProduk = [
        { id: 1, nama: 'Laptop', harga: 7000000 },
        { id: 2, nama: 'Mouse', harga: 150000 }
    ]
    res.json(daftarProduk);
});

// endpoint menampilkan produk spesifik berdasarkan id
app.get('/api/cariproduk/:id', (req, res) => {
    const { id } = req.params;

    const daftarProduk = [
        { id: 1, nama: 'Laptop', harga: 7000000 },
        { id: 2, nama: 'Mouse', harga: 150000 }
    ]

    const temukanProduk = daftarProduk.find(p => p.id === parseInt(id));

    if (temukanProduk) {
        //res.json(temukanProduk.id);
        //res.json(temukanProduk.nama);
        res.json(temukanProduk.nama);
    } else {
        res.status(404).json({ pesan: 'Produk Tidak Ditemukan' });
    }
});


let tambahProduk = [
    { id: 1, nama: "Laptop", harga: 7000000 },
    { id: 1, nama: "mouse", harga: 1500000 }
];


// IKI SENG POST


app.post('/api/tambahproduk', (req, res) => {
    const { nama, harga } = req.body;

    const produkBaru = {
        id: tambahProduk.length + 1,
        nama: nama,
        harga: harga
    };

    tambahProduk.push(produkBaru);

    res.status(201).json({
        pesan: "Produk Berhasil ditambahkan!",
        data: produkBaru
    });
});

app.get('/api/lihatproduk', (req, res) => {
    res.json(tambahProduk);
});

// endpoint put
app.put('/api/ubahproduk/:id', (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;

    const produk = tambahProduk.find(p => p.id === parseInt(id))

    if (!produk) {
        return res.status(404).json({ pesan: 'Produk tidak ditemukan' });
    }

    if (nama) produk.nama = nama;
    if (harga) produk.harga = harga;

    res.json({
        pesan: 'Produk Berhasil diupdate',
        data: produk
    })
});

// endpoint delete

const namaBarang = [
    { id: 1, nama: "Komputer", harga: 1000000 },
    { id: 1, nama: "Mouse", harga: 1000000 }
];


app.get('/api/namabarang', (req, res) => {
    res.json(namaBarang)
});

app.delete('/api/delete/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = namaBarang.findIndex(p => p.id === productId);
    console.log(productIndex);
    if (productIndex === -1) {
        return res.status(404).json({
            pesan: "Tidak ditemukan"
        })
    }

    const deletedProduct = namaBarang.splice(productIndex, 1);

    res.status(200).json({
        pesan: 'Produk berhasil dihapus',
        yangDihapus: deletedProduct[0],
        sisaData: namaBarang
    });
});



app.listen(PORT, () => {

    console.log(`server jalan di http://localhost:${PORT}`);
});
