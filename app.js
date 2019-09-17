const express = require('express');
const app = express();
var path = require('path');
var helmet = require('helmet')
const PORT= process.env.PORT || 3000;


// security
app.use(helmet())

// routes
const indexRoute = require("./routes/index");

// 뷰엔진 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


// use routes
app.use("/", indexRoute);

app.use(function (req, res) {
    res.redirect('/');
});

//listen
app.listen(PORT, function () {
    console.log('app listening on port',PORT);
});