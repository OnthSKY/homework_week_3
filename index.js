const express = require('express');
const app = express();

app.get('/hello', function(req, res){
    res.send("Merhaba, GET isteği attınız");
});
app.post('/hello', function(req, res){
    console.log("Post isteği için istek gönderildi");
    res.send("Merhaba, POST isteği attınız");
});

app.put('/hello', function(req, res){
    res.send("Merhaba, PUT isteği attınız");
});

app.delete('/hello', function(req, res){
    res.send("Merhaba, DELETE isteği attınız")
});

const server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address.port;
    console.log("App listening at http://%s:%s", host,port);
});
