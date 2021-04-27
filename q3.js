const request = require('request');
const fs = require('fs');

const url = 'https://www.google.com';


request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
    fs.writeFile('googleData.html',body,'utf8',(err)=>{
        if(err) return err;
        console.log('Just pulled all the posts and created file');
    })
});

const events = require('events');

let emitter = new events.EventEmitter();

emitter.on('newEvent',()=>{
    request('https://www.google.com/logos/doodles/2021/thank-you-public-health-workers-and-researchers-in-the-scientific-community-6753651837109269-law.gif').pipe(fs.createWriteStream('doodle.png'));
    console.log('Emitted');

});

emitter.emit('newEvent');