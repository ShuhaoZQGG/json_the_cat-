const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const API = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(API, (error, response, body) => {
    if (error) callback(error, null); // Print the error if one occurred

    const data = JSON.parse(body);

    if (data.length === 0) callback(null, null);
    else {
      let description = data[0].description;
      callback(null, description);
    }
  });
};



module.exports = {fetchBreedDescription};


