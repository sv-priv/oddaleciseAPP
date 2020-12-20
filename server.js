const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/oddalecise'));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/oddalecise/index.html'));
});
<<<<<<< HEAD
app.listen(process.env.PORT || 8080);
=======
app.listen(process.env.PORT || 8080);


>>>>>>> production
