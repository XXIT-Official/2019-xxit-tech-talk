const express = require('express');
const app = express();
var path = require('path');
const PORT= process.env.PORT || 3000;

// routes
const indexRoute = require("./routes/index");

// 뷰엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// use routes
app.use("/", indexRoute);


//listen
app.listen(PORT, function () {
    console.log('app listening on port',PORT);
});