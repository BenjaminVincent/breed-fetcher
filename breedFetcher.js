


const request = require('request');


const fetchBreedDescription = (breedName, callBack) => {

  const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(URL, (error, response, body) => {
    if (error) {
      callBack(error, null);
    }

    const data = JSON.parse(body);
    
    if (data.length === 0) {
      callBack(error, null);
    } else {
      callBack(null, data[0].description.trim());
    }

  });

};




module.exports = {
  fetchBreedDescription
};


