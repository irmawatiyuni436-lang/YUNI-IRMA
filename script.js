// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa=document.getElementById('sapaButton');
// 2.  Tambahkan 'event listener' untuk 'clic'
tombolSapa.addEventListener(click', function() {
   // 3.Jalankan kode ini ketika tombol di-klik
   aler('Halo! Terima kasih sudah berkunjung!');
});
