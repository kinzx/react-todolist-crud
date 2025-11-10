# React To-Do List CRUD

Aplikasi web sederhana untuk manajemen tugas (To-Do List) yang dibangun dengan React. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus (CRUD) tugas dengan antarmuka yang bersih dan modern.

![Screenshot Aplikasi To-Do List](placeholder.png) 
*(Ganti `placeholder.png` dengan screenshot aplikasi Anda)*

## ✨ Fitur

- **Tambah Tugas:** Menambahkan tugas baru melalui sebuah modal, lengkap dengan nama tugas, waktu, prioritas, dan status.
- **Lihat Daftar Tugas:** Menampilkan semua tugas dalam daftar yang terorganisir.
- **Edit Tugas:** Memperbarui detail tugas yang sudah ada (nama, waktu, prioritas, status) pada modal yang sama.
- **Hapus Tugas:** Menghapus tugas dari daftar dengan aman menggunakan modal konfirmasi.
- **Manajemen Status:** Melacak kemajuan setiap tugas dengan status: `To Do`, `In Progress`, atau `Done`.
- **Prioritas Tugas:** Memberi label prioritas pada setiap tugas: `Low`, `Medium`, atau `Hard`.
- **Antarmuka Pengguna Kustom:** Menggunakan kombinasi React-Bootstrap dan CSS kustom untuk tampilan modal dan komponen lainnya yang unik dan menarik.

## 🚀 Tumpukan Teknologi (Tech Stack)

- **Frontend:** React.js
- **Komponen UI:** React-Bootstrap
- **Ikon:** React Icons
- **Manajemen State:** React Hooks (`useState`, `useEffect`)

## 🛠️ Instalasi dan Setup Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda.

1.  **Clone Repositori**
    ```bash
    git clone https://github.com/username/react-todolist-crud.git
    ```
    *(Jangan lupa ganti `https://github.com/username/react-todolist-crud.git` dengan URL repositori Anda)*

2.  **Masuk ke Direktori Proyek**
    ```bash
    cd react-todolist-crud
    ```

3.  **Install Dependensi**
    Gunakan `npm` atau `yarn` untuk menginstal semua dependensi yang dibutuhkan.
    ```bash
    npm install
    ```
    atau
    ```bash
    yarn install
    ```

4.  **Jalankan Aplikasi**
    Setelah instalasi selesai, jalankan server pengembangan.
    ```bash
    npm start
    ```
    Aplikasi akan berjalan dan bisa diakses di `http://localhost:3000`.

## 📝 Cara Penggunaan

- Klik tombol **"+ Add Task"** untuk membuka modal dan menambahkan tugas baru.
- Isi semua field yang diperlukan (Task, Time, Priority, Status) lalu klik **"Add Task"**.
- Untuk mengedit tugas, klik ikon pensil (edit) pada kartu tugas. Modal akan muncul dengan data yang sudah terisi. Ubah data yang diinginkan dan klik **"Update Task"**.
- Untuk menghapus tugas, klik ikon tempat sampah (hapus). Sebuah modal konfirmasi akan muncul. Klik **"Delete"** untuk menghapus tugas secara permanen.

---

Dibuat dengan ❤️ untuk portofolio.