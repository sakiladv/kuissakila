// Data mahasiswa
const dataMahasiswa = [
    { no: 1, nama: "Sakila Divia", nim: "12345", kelas: "A", jenisKelamin: "Perempuan", link: "sakila.html" },
    { no: 2, nama: "Fauziyah Salsabila", nim: "6789", kelas: "B", jenisKelamin: "Perempuan", link: "fauziyah.html" },
    { no: 3, nama: "Woozi Seventeen", nim: "0001", kelas: "A", jenisKelamin: "Laki-laki", link: "woozi.html" },
    { no: 4, nama: "Minggyu Seventeen", nim: "0002", kelas: "B", jenisKelamin: "Laki-laki", link: "mingyu.html" }
];

// Membuat header menggunakan DOM
const headerDiv = document.getElementById('headerContainer');
const h1 = document.createElement('h1');
h1.textContent = "Tabel Data Mahasiswa Sistem Informasi Kelautan";
h1.style.fontSize = "24px";
h1.style.fontWeight = "bold";
h1.style.textAlign = "center";
headerDiv.appendChild(h1);

// Mendapatkan elemen tabel
const table = document.getElementById('customers');

// Membuat baris header tabel
const headerRow = document.createElement('tr');
const headers = ['No', 'Nama', 'NIM', 'Kelas', 'Jenis Kelamin', 'Link'];
headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    headerRow.appendChild(th);
});
table.appendChild(headerRow);

// Fungsi untuk membuat baris data mahasiswa
function createRow(mahasiswa) {
    const row = document.createElement('tr');

    // Kolom No
    const noCell = document.createElement('td');
    noCell.textContent = mahasiswa.no;
    row.appendChild(noCell);

    // Kolom Nama
    const namaCell = document.createElement('td');
    namaCell.textContent = mahasiswa.nama;
    row.appendChild(namaCell);

    // Kolom NIM
    const nimCell = document.createElement('td');
    nimCell.textContent = mahasiswa.nim;
    row.appendChild(nimCell);

    // Kolom Kelas
    const kelasCell = document.createElement('td');
    kelasCell.textContent = mahasiswa.kelas;
    row.appendChild(kelasCell);

    // Kolom Jenis Kelamin
    const jkCell = document.createElement('td');
    jkCell.textContent = mahasiswa.jenisKelamin;
    row.appendChild(jkCell);

    // Kolom Link
    const linkCell = document.createElement('td');
    const link = document.createElement('a');
    link.textContent = 'Profile';
    link.href = mahasiswa.link;
    linkCell.appendChild(link);
    row.appendChild(linkCell);

    // Menambahkan event listeners
   

    

    row.addEventListener('mouseover', () => {
        row.classList.add('hover');
    });

    row.addEventListener('mouseout', () => {
        row.classList.remove('hover');
    });

    row.addEventListener('mousemove', (event) => {
        console.log(`Mouse bergerak di ${mahasiswa.nama}: (${event.clientX}, ${event.clientY})`);
    });

    // Sakila
if (mahasiswa.nama === "Sakila Divia") {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah navigasi ke link
        document.body.style.backgroundColor = 'pink'; // Mengubah warna latar belakang menjadi kuning
    });
}

    // Fauziyah Salsabila
    if (mahasiswa.nama === "Fauziyah Salsabila") {
        link.addEventListener('mouseover', () => {
            alert("Ini adalah profil Fauziyah Salsabila.");
        });

        link.addEventListener('click', (event) => {
            alert(`Anda mengklik link ke profil ${mahasiswa.nama}.`);
        });
    }

    // Woozi
    if (mahasiswa.nama === "Woozi Seventeen") {
        link.addEventListener('mouseover', () => {
            link.style.fontSize = '2em'; // Memperbesar ukuran font
            link.style.transition = 'font-size 0.3s'; // Menambahkan transisi halus
        });
        link.addEventListener('mouseout', () => {
            link.style.fontSize = '1em'; // Mengembalikan ukuran font
        });
    }

    if (mahasiswa.nama === "Minggyu Seventeen") {
        link.addEventListener('mouseout', () => {
            // Mengubah gaya link saat mouse keluar
            link.style.color = 'black'; // Mengubah warna menjadi hitam
        });
        
        link.addEventListener('mouseover', () => {
            link.style.color = 'blue'; // Mengubah warna menjadi biru saat mouse masuk
        });
    }

    return row;
}

// Mengisi tabel dengan data mahasiswa
dataMahasiswa.forEach(mahasiswa => {
    const row = createRow(mahasiswa);
    table.appendChild(row);
});
