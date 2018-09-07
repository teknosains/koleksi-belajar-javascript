let max_line = 32;
let max_header = 14;
let max_footer = 6;
let max_detail = max_line - max_header - max_footer;

let jumlah_row = 7;


let fill_detail = [];
for(let i = 1; i <= jumlah_row; i++) { fill_detail.push('item-' + i); }

function buildHeader() {
  for(let i = 1; i <= max_header; i++) {
    console.log('header-' + i);
  }
}

function buildFooter() {
  for(let i = 1; i <= max_footer; i++) {
    console.log('footer-' + i);
  }
}

// focus disini
function buildDetail() {
  let counter = 1;
  fill_detail.forEach((item, idx) => {
    if ((counter+max_detail)+1 < max_line) {
      console.log(counter + '->' + item);
      counter++;
    } else {
      console.log('*************************************');
      console.log('*************************************');
      console.log('*************************************');
      counter = 1;
    }

  });

  if (fill_detail.length < max_detail) {
    for (let i = counter; i <= (max_detail); i++) {
      console.log(i + '***************************************');
    }
  } else {
    for (let i = 1; i <= (max_line - (counter + max_footer)); i++) {
      console.log(i + '***************************************');
    }
  }
}

buildHeader();
buildDetail();
buildFooter();