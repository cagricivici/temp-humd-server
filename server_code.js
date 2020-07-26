const http = require('http')
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const fs = require('fs');
var csvWriter = require('csv-write-stream');
var writer = csvWriter({sendHeaders: false}); //Instantiate var
var csvFilename = __dirname + "/csv_data/data.csv";







const server = http.createServer(function(request, response) {
  console.dir(request.param)




  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
    
    
    
      body += data
      console.log('Partial body: ' + body)
      
      var obj = JSON.parse(body);
      var _temp = obj.temp;
      var _humd = obj.humd;
      console.log(_temp)
      console.log(_humd)
      
      
      
      if (!fs.existsSync(csvFilename)) {
          writer = csvWriter({sendHeaders: false});
          writer.pipe(fs.createWriteStream(csvFilename));
          writer.write({
          header1: 'Temperature',
          header2: 'Humidity'
          
  });
  writer.end();
} 

// Append some data to CSV the file    
writer = csvWriter({sendHeaders: false});
writer.pipe(fs.createWriteStream(csvFilename, {flags: 'a'}));
writer.write({
  header1: _temp,
  header2: _humd

});
writer.end();
      
      
    })
    
    
    
    request.on('end', function() {
      console.log('Body: ' + body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })
  } else {
    console.log('GET')
    var html = `
            <html>
                <body>
                    <form method="post" action="http://localhost:3000">Name: 
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})  

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/gauges',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/gauges.html'));
  //__dirname : It will resolve to your project folder.
});


router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/templates/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 8000);

console.log('Running at Port 5000');
