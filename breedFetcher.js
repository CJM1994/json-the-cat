const request = require('request');

const searchBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, (error, response, body) => {

  if (error) throw new Error('Request to server failed, check request URL (line 5) and that TheCatAPI is active');

  if (JSON.parse(body)[0] === undefined) {
    console.log('Error: Breed not found');
  } else {
    const breedDescription = JSON.parse(body)[0].description;
    console.log('Breed Description: ', breedDescription);
  }

});