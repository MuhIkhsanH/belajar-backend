const sqlite3 = require('sqlite3');
const { open } = require('sqlite');


async function urutkanHargaDariBesar() {
    const db = await open({
        filename: './latihan.sqlite',
        driver: sqlite3.Database
    });

    const kecilKeBesar = await db.all("SELECT * FROM barang ORDER BY harga ASC");
    const besarKeKecil = await db.all("SELECT * FROM barang ORDER BY harga DESC");

    console.log('Isi:');
    console.log(kecilKeBesar);
    console.log(besarKeKecil);
};

urutkanHargaDariBesar();

