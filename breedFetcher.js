const request = require('request');

const searchBreed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${searchBreed}`, (error, response, body) => {

  // console.log('error: ', error);
  // console.log('resonse: ', response);

  if (JSON.parse(body)[0] === undefined) {
    console.log('Error: Breed not found');
  }
  else {
    const breedDescription = JSON.parse(body)[0].description;
    console.log('Breed Description: ', breedDescription);
  }

  // if (breedDescription)
  //   console.log('Breed Description: ', breedDescription);
  // else console.log('Breed Name Invalid');

})