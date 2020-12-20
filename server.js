const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');
// import cors from 'cors';

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/dist/oddalecise'));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/oddalecise/index.html'));
});
app.listen(process.env.PORT || 8080);
