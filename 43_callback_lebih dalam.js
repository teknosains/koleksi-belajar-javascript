/**
 * Banyak aksi dan proses di Javascript dijalankan secara 
 * Asyncron, termasuk Event-event yang sering kita sematkan di Web
 * 
 * semuanya itu bener-bener manfaatin Callbacks secara masif
 */

 // contoh Event/Action di jQuery
 $('elem').click(function() {
    // ini body function callback
 });

 /**
  * Enaknya Asyncron, layar/window browser kita gk freeze saat kita melakukan banyak aksi
  * ..kita masih bisa melakukan aksi-aksi lain di page yang sama
  */

  /**
   * Callback itu apa sih sebenarnya? Callback adalah function yang akan dieksekusi setelah
   * operasi lain selesai dilakukan. Operasi lain ini bisa maca-macam..seperti request Ajax ke server
   * rendering DOM, Read/Write file dll.
   */
  $.ajax({
    url: 'fetch/user',
    data: {id: 20},
    success: function(result) {
      // cllback
    },
    complete: function() {
      // callback
    },
    error: function (x, h, r) {
      // callback
    }
  });

  /**
   * istilah Callback hell, adalah penggunaan callback terus-menerus...sampe nested
   * yang dalam
   */
  readfile('/file_1', function(result) {
    if (result) {
      readfile('/file_2', function(result2) {
        if (result2) {
          readfile('/file_3', function(result3) {
            if (result3) {
              /// terusss begitu sampe dalem...semakin banyak semakin HELL
            } else {
              throw Error('Error reading file 3');
            }
          });
        } else {
          throw Error('Error reading file 2');
        }
      });
    } else {
      throw Error('Error reading file 1');
    }
  });

  // bener-bener malesin pan liatnya
  // cara untuk menghindari Callback hell jaman now itu pake Promise
  // lihat tutorial berikutnya