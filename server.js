
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require("fs")

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(8082, function(){
 console.log("Express server has started on port 3000")
});

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true

// secret – 쿠키를 임의로 변조하는것을 방지하기 위한 sign 값 입니다. 원하는 값을 넣으면 됩니다.
// resave – 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
// saveUninitialized – uninitialized 세션이란 새로 생겼지만 변경되지 않은 세션을 의미합니다. Documentation에서 이 값을 true로 설정하는것을 권장합니다.
}));


var router = require('./router/main')(app, fs);




// var express = require('express');
// var app = express();
// var router = require('./router/main')(app);

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// var server = app.listen(8083, function(){
//     console.log("Express server has started on port 3000")
// });
// app.use(express.static('public'));
// //정적 파일이란? HTML 에서 사용되는 .js 파일, css 파일, image 파일 등을 가르킵니다.
// // 서버에서 정적파일을 다루기 위해선, express.static() 메소드를 사용하면 됩니다.

// // public/css 디렉토리를 만드시고 그 안에 style.css 파일을 생성해주세요.

