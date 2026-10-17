const sqlite3 = require('sqlite3');
const { open } = require('sqlite');


async function insertData() {
    const db = await open({
        filename: './latihan.sqlite',
        driver: sqlite3.Database
    });


    //wait db.run('INSERT INTO barang (nama, harga) VALUES (?,?)', ['Bakpao', 5000]);

    const isi = await db.all("SELECT * FROM barang");

    console.log('Isi:');
    console.log(isi);
};

insertData();

