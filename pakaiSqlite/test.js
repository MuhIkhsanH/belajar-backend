const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function testSqlite() {
    const db = await open({
        filename: './latihan.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS barang (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nama TEXT,
        harga INTEGER
        )
        `);

    // ini tambah data terus (?,?) itu peletakannya

    // await db.run('INSERT INTO barang (nama, harga) VALUES (?,?)', ['Buku Tulis', 5000]);
    //await db.run('INSERT INTO barang (nama, harga) VALUES (?,?)', ['Buku Pulpen', 3000]);

    // ini delet 

    //await db.run('DELETE FROM barang WHERE ID = ?', [4]);

    // ini update

    // await db.run(
    //     'UPDATE barang SET nama = ?, harga = ? WHERE id = ?',
    //     ['Pulpen Hitam', 3000, 2]
    // )

    const semuaBarang = await db.all('SELECT * FROM barang');

    // nama saja
    // const semuaBarang = await db.all('SELECT nama FROM barang');
    console.log('Isi Database:');
    console.log(semuaBarang);

    await db.close();
}


// cobain fungsion baruuu
async function tampilkanIsi() {
    const db2 = await open({
        filename: './latihan.sqlite',
        driver: sqlite3.Database
    });

    const isi = await db2.all("SELECT * FROM barang");
    console.log('Isi:');
    console.log(isi);
}

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
}


// testSqlite();
//tampilkanIsi();
urutkanHargaDariBesar();