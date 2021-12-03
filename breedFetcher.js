const request = require('request');

let catName = (process.argv).pop();

request(`https://api.thecatapi.com/v1/breeds/search?q=${catName}`, function (error, response, body) {

  if (error) {
    console.error('error:', error);
  }

  body = JSON.parse(body);
  const breed = body[0];

  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`failed to find breed ${catName}`);
  }
});