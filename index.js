require('express-async-errors');
const winston   = require('winston');
const config    = require('config');
const express   = require('express');
const app       = express();

require("./startup/routes")(app);

winston.add(winston.transports.File, {filename: 'logfile.log'});

if(!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));