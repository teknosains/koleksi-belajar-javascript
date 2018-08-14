let url = 'https://xkcd.com/info.0.json';
function fetchImage(url) {
  fetch(url, {method: 'get'})
  .then((result) => {
      console.log(result);
  })
  .catch((err) => {
    console.log(err.stack);
  });
}

fetchImage(url);

