const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
// import cors from 'cors';

app.use(cors());

app.use(express.static(__dirname + '/dist/oddalecise'));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/oddalecise/index.html'));
});
app.listen(process.env.PORT || 8080);
