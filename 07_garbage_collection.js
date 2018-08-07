/**
 * Garbage collection? What the heck ?
 * 
 * Adalah mekanisme bersih-bersih memory yang dilakukan oleh Javascript engine
 * ketika ada "sisa" hasil eksekusi suatu script atau tatement di Memory
 * dan "sisa" itu sudah tidak dibutuhkan/digunakan lagi oleh siapapun
 */

 // misal
 let user = {
     name: "Budi"
 };

 // kode diatas artinya object { name: "Budi" } akan disimpan disuatu lokasi di memory
 // dan variable user punya refereence/penunjuk ke lokais memory dimana Object tadi disimpan
 // misal kita lakukan re-assign ke variable user

 user = null;

 // artinya sekarang variable user punya value baru, dan reference ke 
 // object { name: "Budi" } sudah putus...
 // ini berarti object { name: "Budi" } sekarang itu yatim piatu, tidak ada yang punya
 // walhasil...ia akan di destroy dari memory oleh Garbage Collector

 
