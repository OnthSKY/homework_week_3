const { response } = require('express');
const express = require('express');
const app = express();
app.use(function(req,res,next){
    if (req.method === 'POST'){
        console.log("Post isteği için istek gönderildi");
    }
    next();
});
app.get('/hello', function(req, res){
    res.send("Merhaba, GET isteği attınız");
});
app.post('/hello', function(req, res){
   
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
