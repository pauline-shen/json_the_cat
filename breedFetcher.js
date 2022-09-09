const request = require('request');
const args = process.argv;


request('https://api.thecatapi.com/v1/breeds/search?q=' + args[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  if (body === '[]') {
    console.log('The requested breed is not found.');
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0]['description']);
});
