const request = require('request');

let args = process.argv;
let breed = args.slice(2)[0];

const API = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(API, (error, response, body) => {
  if (error) console.log(`Hey here is an Error:\n ${error.message} \n`); // Print the error if one occurred
  
  const data = JSON.parse(body);
  if (data.length === 0) console.log('Wrong breed name, try again! \n');
  let description = data[0].description;
  console.log(description);
});


