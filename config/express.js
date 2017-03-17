

var express = require('express');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');


module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development')
    {
        console.log('app for development morgan');
        app.use(morgan('dev'));

    } else
    {
        console.log('app for production compression');
        app.use(compression());
      
    }
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }
    ));
    app.use(bodyParser.json());
    

    require('../app/routes/index.routes.js')(app);
    return app;
};