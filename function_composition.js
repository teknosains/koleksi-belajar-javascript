/**
 * Function composition adalah teknik dari functional programming
 * di Javascript untuk membuat 2 atau lebih fungsi agar menghasilkan 1 fungsi baru
 * 
 * secara matematis itu bisa ditulis seperti'
 * f(g(x))
 */

 //contoh kasus: Buatlah fungsi Slug dari judul Artikel

 const makeSlug = function(input) {
     return input.split(' ')
        .map(function(str) {
            return str.toLowerCase()
        })
        .join('-')
};

console.log(makeSlug('Gojek Akuisisi Teknosains'));

// bisa kita tweak lagi jadi Composition, dengan bantual lodash library
// bisa jadi seperti ini, dimana urutan eksekusi nya mulai dari yang paling kanan
const makeSlug2 = compose(
    encodeURIComponent,
    join('-'),
    map(toLowerCase),
    split(' ')
);
  