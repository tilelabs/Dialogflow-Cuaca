var apiai = require('apiai');

var app = apiai('f98941cda5294818be3f04dfbf5108ab');

var request = app.textRequest('weather today on jakarta', {
  sessionId:  'b31e89d2-8e27-4ef8-a133-8d95be6bb2bc'
});

request.on('response',  function(response){
  console.log(response);
});

request.on('error', function(error){
  console.log(error);
});

request.end();
