const fetchBreedDescription = require("./breedFetcher");
const searchBreed = process.argv[2];

fetchBreedDescription(searchBreed, (error, breedDescription) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(breedDescription);
  }
});