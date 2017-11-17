var fs = require("fs"),
    http = require("http"),
    url = require("url"),
    path = require("path");

http.createServer(function (req, res) {
  var file = path.resolve(__dirname,"video.mp4");
  fs.stat(file, function(err, stats) {
    var range = req.headers.range,
      positions = range.replace(/bytes=/, "").split("-"),
      start = parseInt(positions[0], 10),
      total = stats.size,
      end = positions[1] ? parseInt(positions[1], 10) : total - 1,
      chunksize = (end - start) + 1;

    res.writeHead(206, {
      "Content-Range": "bytes " + start + "-" + end + "/" + total,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4"
    });

    var stream = fs.createReadStream(file, { start: start, end: end })
      .on("open", function() {
        stream.pipe(res);
      }).on("error", function(err) {
        res.end(err);
      });
  });
}).listen(8888, '127.0.0.1');
