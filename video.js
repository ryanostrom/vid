var http = require('http'),
    chunkit = require('chunkit'),
    fs = require('fs');

http.createServer(function(request, respone){
  console.log('it works');
  respone.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node JS Server Response');
  response.end( );


  // var fStream = fs.createReadStream(__dirname + '/video.mp4');
  // var chunkStream = new chunkit(fStream, {bytes: 1024*1024});

  // chunkStream.on('error', function (err) {
  //     console.log('Error: ', err);
  // });

  // chunkStream.on('chunk', function (chunk) {
  //     console.log('Bytes: ', chunk.data.length);
  // });

  // chunkStream.on('end', function (stats) {
  //     console.log('Stats: ', stats);
  // });

  // // Important when no callback provided.
  // chunkStream.begin();

}).listen(7000);
