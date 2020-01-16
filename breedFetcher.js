const request = require('request');
const args = process.argv.slice(2);


const breedOfCat = args[0].trim();
const URL = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedOfCat;

request(URL, (error, response, body) => {
  
  if (error) {
    console.log("URL Not Found");
  }

  const data = JSON.parse(body);
  
  if (data.length === 0) {
    console.log("breed does not exist");
  } else {
    console.log("DESCRIPTION: ", data[0].description);
  }

});


