// ============================================================
// CHEATSHEET BELAJAR — Anwar
// Kumpulan contoh dari awal belajar sampai sekarang.
// File ini cuma contekan, nggak perlu diimport ke mana-mana.
// Tiap bagian contohnya mandiri — baca yang lagi dibutuhin aja.
// ============================================================

import { useState } from "react";

// ---------- 1. ARROW FUNCTION ----------
// Cara singkat nulis function.
const sapa = (nama) => {
  return `Halo, ${nama}`;
};

// Kalau isinya cuma satu baris return, {} dan kata return boleh dibuang (implicit return):
const sapaSingkat = (nama) => `Halo, ${nama}`;

// Satu parameter: kurungnya boleh dibuang juga:
const kuadrat = (n) => n * n;

// ---------- 2. TEMPLATE LITERAL ----------
// String pakai backtick `, sisipin variabel pakai ${}:
const nama = "Anwar";
const umur = 22;
console.log(`Nama saya ${nama}, umur ${umur}`);

// ---------- 3. map() ----------
// Ngubah tiap item array jadi bentuk baru. Hasilnya ARRAY BARU, yang lama utuh.
const angka = [1, 2, 3];
const kaliDua = angka.map((n) => n * 2); // [2, 4, 6]

const barang = [
  { nama: "kopi", harga: 15000 },
  { nama: "teh", harga: 8000 },
];
const daftar = barang.map((b) => `${b.nama} - RP. ${b.harga}`);
// ["kopi - RP. 15000", "teh - RP. 8000"]

// ---------- 4. filter() ----------
// Nyaring array: cuma item yang return true yang lolos. Hasilnya ARRAY BARU.
const mahal = barang.filter((b) => b.harga > 10000);
// [{ nama: "kopi", harga: 15000 }]

// ---------- 5. filter + map digabung ----------
// Saring dulu, baru ubah bentuk:
const hasil = barang
  .filter((b) => b.harga > 10000)
  .map((b) => b.nama); // ["kopi"]

// ---------- 6. find() ----------
// Cari SATU item PERTAMA yang cocok. Ketemu langsung berhenti.
const ketemu = barang.find((b) => b.harga > 10000);
// { nama: "kopi", harga: 15000 }  (yang pertama ketemu, bukan yang "paling dekat")

// ---------- 7. DESTRUCTURING ----------
// Bongkar object jadi variabel. Kalau mau nama variabel beda, pakai titik-dua:
const teh = { nama: "teh", harga: 8000 };
const { nama: namaMinuman, harga: hargaMinuman } = teh;
// namaMinuman = "teh", hargaMinuman = 8000

// Destructuring di parameter function (pola ini dipakai di props React):
function infoTeh({ nama, harga }) {
  return `${nama} harganya ${harga}`;
}

// ---------- 8. SPREAD (...) ----------
// "Bongkar isi" buat bikin SALINAN baru. Yang lama nggak ikut berubah.
// Array:
const angkaBaru = [...angka, 4]; // [1, 2, 3, 4], angka aslinya utuh
// Object:
const esTeh = { ...teh, nama: "es teh" }; // { nama: "es teh", harga: 8000 }

// ---------- 9. IMPORT / EXPORT ----------
// Di file perkakas.js:
//   export function tambah(a, b) { return a + b; }
//   export default function kurang(a, b) { return a - b; }
// Di file lain:
//   import kurang, { tambah } from "./perkakas.js";
// Aturan: nama yang diimport harus sama dengan yang diexport dan yang dipanggil.

// ---------- 10. fetch ----------
// Minta data ke internet. Hasilnya dibaca pakai .then:
fetch("https://api.contoh.com/user")
  .then((res) => res.json()) // ubah response jadi JSON
  .then((data) => {
    const { name, email } = data; // destructuring
    console.log(`name: ${name}, email: ${email}`); // template literal
  });

// ---------- 11. COMPONENT ----------
// Component = function nama huruf BESAR yang return JSX.
// Dipakai kayak tag HTML:
function Namaku() {
  return <p>Nama saya Anwar</p>;
}

function App() {
  return <Namaku />;
}

// ---------- 12. PROPS ----------
// Data dari parent ke child lewat atribut, ditangkep pakai destructuring:
function Kenalan({ nama }) {
  return <p>Halo, {nama}!</p>;
}
// Pakainya: <Kenalan nama="Budi" />

// ---------- 13. useState ----------
// State = data milik component. Kalau diubah pakai setter -> render ulang.
function Counter() {
  const [angkaState, setAngkaState] = useState(0); // mulai dari 0
  // angkaState = nilai sekarang, setAngkaState = cara ngubahnya

  return (
    <div>
      <p>{angkaState}</p>
      <button onClick={() => setAngkaState(angkaState + 1)}>Tambah</button>
      <button onClick={() => setAngkaState(angkaState - 1)}>Kurang</button>
    </div>
  );
}

// ---------- 14. TOGGLE BOOLEAN + TERNARY ----------
// Ternary = if-else versi expression:  kondisi ? nilaiKalauTrue : nilaiKalauFalse
// Dipakai di dalam {} JSX karena di sana nggak bisa nulis statement if.
function Lampu() {
  const [lampu, setLampu] = useState(false);

  // Handler = function kecil di dalam component (nested function).
  // Bisa baca state & setter dari luarnya berkat closure.
  function toggleLampu() {
    setLampu(!lampu); // ! = dibalik: true jadi false, sebaliknya
  }

  return (
    <div>
      <p>{lampu ? "Lampu menyala" : "Lampu mati"}</p>
      <button onClick={toggleLampu}>Toggle lampu</button>
    </div>
  );
}
// onClick={toggleLampu}  = oper REFERENSI, dipanggil PAS diklik (BENAR)
// onClick={toggleLampu()} = langsung dipanggil PAS RENDER (SALAH -> infinite loop)

// ---------- 15. HANDLER DENGAN PARAMETER ----------
// Kalau handler butuh argumen, bungkus arrow function biar nggak kepanggil pas render:
function Nama() {
  const [namaState, setNamaState] = useState("Anwar");

  function gantiNama(namaBaru) {
    setNamaState(namaBaru);
  }

  return (
    <div>
      <p>Halo, {namaState}!</p>
      <button onClick={() => gantiNama("Budi")}>Budi</button>
      <button onClick={() => gantiNama("Siti")}>Siti</button>
    </div>
  );
}
// Catatan: setNama("Anwar") saat state sudah "Anwar" -> nilai sama -> React skip render ulang.
// Bukti: yang memicu render ulang adalah PERUBAHAN state, bukan kliknya.

// ---------- 16. INPUT (onChange + e.target.value) ----------
function KetikNama() {
  const [teks, setTeks] = useState("");

  // React ngoper object event (e) otomatis ke handler.
  function handleKetik(e) {
    setTeks(e.target.value); // e.target.value = tulisan di dalam input
  }

  return (
    <div>
      <p>Kamu mengetik: {teks}</p>
      <input onChange={handleKetik} value={teks} placeholder="ketik di sini" />
    </div>
  );
}
// value={teks} bikin input "controlled": state satu-satunya sumber kebenaran.

// ---------- 17. LIST RENDERING (map + key) ----------
// map yang return element menghasilkan ARRAY OF ELEMENT.
// React bisa render array itu: tinggal jejerin satu-satu.
function DaftarBuah() {
  const buah = ["Apel", "Mangga", "Jeruk"];

  return (
    <ul>
      {buah.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  );
}
// key = identitas tiap item, biar React nggak ketuker pas list berubah.
// Idealnya id unik & stabil dari data; index cukup buat list yang cuma nambah di belakang.
// key itu spesial: nggak bisa dibaca sebagai props, cuma buat internal React.

// ---------- 18. UPDATE ARRAY DI STATE ----------
// push() = nambahin item ke BELAKANG array, tapi NGUBAH array aslinya (mutasi).
//
// JANGAN:  buah.push("Anggur"); setBuah(buah);
//          -> referensi array sama -> React kira nggak berubah -> nggak render ulang.
//
// LAKUKAN: bikin array BARU pakai spread:
function tambahBuah(buah, setBuah) {
  setBuah([...buah, "Anggur"]);
}
// Aturan umum: tiap update array/object di state, bikin versi BARU. Jangan utak-atik yang lama.
