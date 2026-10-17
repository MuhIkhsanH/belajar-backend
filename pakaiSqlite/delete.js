const sqlite3 = require('sqlite3');
const { open } = require('sqlite');


async function insertData() {
    const db = await open({
        filename: './latihan.sqlite',
        driver: sqlite3.Database
    });


    await db.run('DELETE FROM barang WHERE ID = ?', [6])

    const isi = await db.all("SELECT * FROM barang");

    console.log('Isi:');
    console.log(isi);
};

insertData();

