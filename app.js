var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contactRouter = require('./routes/contact');
var menuRouter = require('./routes/menu');
var orderRouter = require('./routes/order');
var submitRouter = require('./routes/submit');
var varukorgRouter = require('./routes/varukorg');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var profilRouter = require('./routes/profil');
var logoutRouter = require('./routes/logout');


var app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/order', orderRouter);
app.use('/submit', submitRouter);
app.use('/varukorg', varukorgRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/profil', profilRouter);
app.use('/logout', logoutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
