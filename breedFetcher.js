const request = require('request');

const fetchBreedDescription = function (breedname, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {

    if (error) return callback('Request to server failed, check request URL (line 5) and that TheCatAPI is active', null);

    if (JSON.parse(body)[0] === undefined) {
      callback('Error: Breed not found', null);
    } else {
      const breedDescription = JSON.parse(body)[0].description;
      callback(null, breedDescription);
    }

  });

}

module.exports = fetchBreedDescription;