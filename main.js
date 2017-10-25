var apiai = require('apiai');

var app = apiai('<client token>');

var request = app.textRequest('weather today on jakarta', {
  sessionId:  '<session id>'
});

request.on('response',  function(response){
  console.log(response);
});

request.on('error', function(error){
  console.log(error);
});

request.end();
