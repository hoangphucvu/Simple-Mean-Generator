var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    //uncomment this after you change db name
    //db = require('./config/db'),
    app = express(),
    port = process.env.PORT || 3000,
    http = require('http'),
    server = http.createServer(app),
    env = process.env.NODE_ENV || 'development';
//require route for app
var indexRoute = require('./app/routes/index.server.routes');

//app.locals.pretty = true;
// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//cookie and session for user authenticate
/*app.use(cookieParser());
app.use(session({
    secret: "asdkoasdkascmkascpoascmkalscasoi",
    resave: false,
    saveUninitialized: true
}));*/


//middleware for single page 
app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' + req.params.partialPath);
});
//catch all route to prevent 404 error
app.get('*', indexRoute);



// Config reload whenever frontend folder change
if (env === 'development') {
    // TODO
}

if (env === 'production') {
    // TODO
}
console.log(env);
server.listen(port, function() {
    console.log("Web server listening on port " + port);
});